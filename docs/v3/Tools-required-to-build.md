# Tools required to build TinyCAD

## Microsoft Visual Studio

As TinyCAD is an open-source project, you may use the Free Community Edition of Visual Studio, which you can download
directly from the [Microsoft Visual Studio](https://visualstudio.microsoft.com) web site.  Do not download Visual Studio Code
as this is insufficient to build TinyCAD.

You will need at least Visual Studio 2019 to build TinyCAD.

## Git command line tools

When a build is created then it uses git to determine which branch it is being built from.

If you have installed a git tool then the command line tools will probably have been installed too.  Just make sure the
"git" command is available in your PATH.  You can check this by typing "git" in a Cmd prompt.


## Node.js and Limedocs Wiki Converter

[Limedocs Wiki Converter](https://github.com/limedocs/limedocs-wiki-converter) is a tool that converts the TinyCAD Wiki pages in to a single HTML file to be distributed with the executable.  This program is written in Javascript and requires
[Node.js](https://nodejs.org) for it to run.

You do not need to install this unless you are re-creating the documentation html file.

## Nullsoft Scriptable Install System (NSIS)

Use version 2.40 or higher.  Older versions may not support the feature set that TinyCAD is using.  This very professional installer is Open Source and freely available from [Sourceforge](http://nsis.sourceforge.net).

You do not need to install this unless you are going to create a new installer.



