ncaa-bracket
============

What is this?
-------------

Interactive and printable bracket for the annual NCAA March Madness basketball tournament.  This is not responsive, but please feel free to fork this and make it so. We accept pull requests! Demo: http://www.bracketadvisor.com/interactive-bracket/

![interbrack](screenshots/interbrack.png)

Credits
---------

Nelson Hsu

Assumptions
-----------

* Google docs
* jQuery
* Miso

What's in here?
---------------

The project contains the following folders and important files:

* ``index.html`` -- Blank bracket
* ``/js`` -- Javascript
* ``/css`` -- Strangely enough, stylesheets

How to use this
---------------

1. Make a copy of this Google doc: https://docs.google.com/spreadsheet/ccc?key=0AurS2EUbrPERdHBkR3VuR3FRSC00QlpmWXJPcnBhUGc&usp=sharing
2. The teams for each region are in separate tabs including the play-in games.  All the labels are in the last tab. Once you have entered all the teams and information, "Publish to the web..."
3. In the Publish window, you'll find a URL that will contain a key. Copy that and paste into line 16 of js/bracket.js

License
----------

The MIT License (MIT)

Copyright (c) 2014 Digital First Media

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
