---
layout: default
---

# How to Build TinyCAD

There are a number of steps required to build TinyCAD.  It should be a fairly streamlined process, you will require at least [Visual Studio 2019](https://visualstudio.microsoft.com), which is a free download from Microsoft.

Please read [Tools required to build](../Tools-required-to-build/) for more information on what tools are required.

## Get the source code

The latest version of the TinyCAD source code is available on [Github](https://github.com/matt123p/TinyCAD).  If you are going to make changes to the TinyCAD source that might be of benefit to other users then I strongly urge you to fork the Github repository and submit a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) when you are ready.

If you have code changes, but are having problems generating the Pull Request then please contact me at admin@tinycad.net


## Building Source

To build the source code you need to: 

1. Open the TinyCAD.sln file in Visual Studio 2019.
2. Restore the NuGet packages - do this by going to the "Project" menu and select "Manage NuGet Packages".  Then when prompted click the "Restore" button to restore all the NuGet packages.
3. Select "Build"

_NOTE_: The default install options of Visual Studio do not include all of the required components for building TinyCAD.  Make sure you have installed C++ for Desktop development and the MFC libraries.  If you have not then run the Visual Studio Installer and install them.

**If you still have problems with Nuget packages** see the discussion here:  [TinyCAD forum](https://forum.tinycad.net/index.php?p=/discussion/4024/failed-to-compile-on-visual-studio-2019#latest)


## Release builds

When you build Release version of TinyCAD then the git branch is determined by the batch file "gitbranch.bat".  You need
git command line tools installed for this to work.  If you are having problems with it then I suggest you edit
gitbranch.bat to hard-code the git branch and avoid the problem.

## 64 bit builds

Please note that TinyCAD is not 64 bit safe at this time and that TinyCAD is still optionally using Microsoft’s DAO to hold the symbol library databases and DAO does not and never will support 64 bit platforms, according to Microsoft.  Only the SQLite3 symbol libraries should be used if you attempt to build a 64-bit version.  This developer is not presently aware of any 64 bit issues other than the DAO component.


## Building the help file

Before you can build the help file make sure you have installed [Node.js](https://nodejs.org) and [Limedocs Wiki Converter](https://github.com/limedocs/limedocs-wiki-converter).

You will also need to clone a copy of the [Github wiki](https://github.com/matt123p/TinyCAD/wiki) pages - these are stored in a different repository to the main source code.  You will find a link to the repository at the bottom of the wiki.

Once you have cloned the wiki pages, open a command prompt and "cd" to that directory, then execute the following command to generate the documentation html:

`lwc --title TinyCAD --css lwc.css .`

Note, that there is a period at the end of the command.

This will produce a file called "documentation.html" that is a single file containing all of the documentation.  If you have any problems then check your Node.js installation and make sure the lwc command is on your PATH.

## Preparing a new installer

The installer is generated using the [Nullsoft Scriptable Install System (NSIS)](http://nsis.sourceforge.net).  The file that controls this is inside the "installer" folder.

You will need a copy of the [Visual Studio C++ Redist](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-download).  Use the link to download the latest copy from Microsoft and place it in to the installer folder.

### Change the version string

From within Visual Studio edit the version string information in the following files: 

### TinyCAD.nsi & TinyCAD_Debug.nsi. 

These are the NSIS installer scripts.  Be careful that you only change the revision string, “2.90.00” (at the time of this writing).  Change it to whatever you want it to be.  This affects only the string that the installer displays when you install TinyCAD, not anything that the TinyCAD executable itself may report.  It is important to keep these duplicate text strings synchronized.  

Note also that this file encodes the relative path element that references the “Release” or the “Debug” directory where your newly created executables will be found.

_Important_:  Please note that the NSIS installer requires that its input file, the .nsi file, contain ONLY Unix style line endings.  If you are editing this file with notepad or Word, this requirement will not be met.  I have been successful editing it with Notepad++ and either converting to Unix style line endings or telling Notepad++ that this is a Unix style line endings file and letting it simply maintain this style.  If you have any embedded DOS/Windows style line endings (i.e., CR/LF rather than just LF), you will get a compile error when attempting to build the NSIS installer.

### TinyCAD.rc

It is preferable (and safest) to modify the contents of this file from within the Visual Studio resource editor.  

Review any copyright notices in the Dialog\IDD_ABOUTBOX and update if needed.

Do not change the TinyCAD sign-on string that says “TinyCAD Version x.xx.xx Placeholder”.  This is automatically filled in at run time from the information found in the Version\VS_VERSION_INFO resource (discussed below).

Review the list of development team members in the Dialog\IDD_ABOUTBOX and update if needed.

Review the list of credits and version numbers for the included open source modules in the Dialog\IDD_ABOUTBOX and update, if needed.

Review the Version\VS_VERSION_INFO resource and update as appropriate.  Note that the last number in the ProductVersion and FileVersion fields will be modified at run time with the build number (automatically obtained from SVN) while the first 3 fields are the major/minor/reallyMinor fields and must be manually edited.  Note that while the version string is duplicated in some of the help files and other documentation files, that this location is the primary version string and is what is shown in the Help/About box and in the signon splash screen.

### Licence.rtf (installer directory)
Review the copyright dates in licence.rtf and update (in two places – one near the top of the file and one near the bottom of the file) if needed.




