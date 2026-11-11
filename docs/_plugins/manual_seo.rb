require 'cgi'

module TinyCAD
  # Run after Jekyll has read the prepared translations, so only current,
  # genuine translations participate in discovery.
  class ManualSEO < Jekyll::Generator
    safe true
    priority :low

    def plain(html)
      CGI.unescapeHTML(html.gsub(/<[^>]*>/, ' ')).gsub(/\s+/, ' ').strip
    end

    def generate(site)
      markdown = site.find_converter_instance(Jekyll::Converters::Markdown)
      pages = site.pages.select { |page| page.data['layout'] == 'default' }
      labels = (site.data['manual_languages'] || []).to_h { |entry| [entry['code'], entry['label']] }
      absolute = lambda { |url| site.config['url'].sub(%r{/$}, '') + site.baseurl.to_s.sub(%r{/$}, '') + url }

      pages.each do |page|
        # Liquid includes and example code should not leak into search snippets.
        prose = page.content.gsub(/\{%.*?%\}|\{\{.*?\}\}/m, '')
        html = markdown.convert(prose)
        heading = html[/<h1\b[^>]*>(.*?)<\/h1>/m, 1]
        title = page.data['title'] || (heading && plain(heading)) || File.basename(page.name, '.*').tr('-', ' ')
        version = page.url[%r{\A/(v[34])(?:/|$)}, 1]
        brand = "TinyCAD#{version ? " #{version}" : ''} Manual"
        title = title.sub(/\ATinyCAD(?: v[34])?\s*[-–—]\s*/, '')
        page.data['seo_title'] = title.match?(/\ATinyCAD(?: v[34])? Manual\z/) ? brand : "#{title} – #{brand}"
        paragraphs = html.scan(/<p\b[^>]*>(.*?)<\/p>/m).flatten.map { |p| plain(p) }.reject(&:empty?)
        description = page.data['description'] || paragraphs.first || title
        page.data['seo_description'] = description.length > 160 ? description[0, 157].rstrip + '…' : description
        canonical = page.data['manual_fallback'] ? page.data['manual_source_url'] : page.url
        page.data['seo_canonical'] = absolute.call(canonical)
        page.data['seo_indexable'] = !page.data['manual_fallback'] && page.data['sitemap'] != false
        page.data['seo_alternates'] = []
      end

      groups = pages.select { |p| p.url.start_with?('/v4/') && p.data['seo_indexable'] }
                    .group_by { |p| p.data['manual_source_url'] || p.url }
      groups.each do |source, equivalents|
        alternates = equivalents.map do |page|
          language = page.data['manual_language'] || 'en'
          { 'language' => language, 'label' => labels[language] || language,
            'url' => page.url, 'absolute_url' => absolute.call(page.url) }
        end.sort_by { |entry| entry['language'] == 'en' ? '' : entry['language'] }
        equivalents.each do |page|
          page.data['seo_alternates'] = alternates
          page.data['seo_default'] = absolute.call(source)
        end
      end
    end
  end
end
