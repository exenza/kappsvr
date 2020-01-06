# kappsvr
Automate Kapps broswer overlays to make them VR friendly.

In order to use this you will need:

Google Chrome
https://www.google.co.uk/chrome

Tampermonkey
https://chrome.google.com/webstore/detail/tampermonkey

Kapps
https://kapps.kutu.ru/

Download kapps.bat, relattives.html, relatives.lnk, standing.html, standings.lnk

Ensure the patch to Chrome.exe in the .bat file matches the path of Chrome on your system.

Edit the .html files by copy paste the Kapps url for the desired overlay in the "window.location=[KAPPS OVERLAY URL]"

Install Tampermonkey in Chrome and create a new Tampermonkey script, copy paste the content of the file: kappsdetect.user.js

Based on your overlay choices the size of the winwod may be incorrect, you can change the window size for standings on line 26,27 and for relatives on line 30,31
