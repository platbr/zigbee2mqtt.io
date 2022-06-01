"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82603],{18903:(e,n,i)=>{i.r(n),i.d(n,{data:()=>t});const t={key:"v-04e9e294",path:"/advanced/zigbee/04_sniff_zigbee_traffic.html",title:"Sniff Zigbee traffic",lang:"en-US",frontmatter:{pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"With CC2531",slug:"with-cc2531",children:[{level:3,title:"Prerequisites",slug:"prerequisites",children:[]},{level:3,title:"1. Flashing the CC2531 stick",slug:"_1-flashing-the-cc2531-stick",children:[]},{level:3,title:"2. Installing required tools",slug:"_2-installing-required-tools",children:[]},{level:3,title:"3. Sniffing traffic",slug:"_3-sniffing-traffic",children:[]}]},{level:2,title:"With HUSBZB-1 stick",slug:"with-husbzb-1-stick",children:[{level:3,title:"Prerequisites",slug:"prerequisites-1",children:[]},{level:3,title:"1. Install drivers",slug:"_1-install-drivers",children:[]},{level:3,title:"2. Installing required tools",slug:"_2-installing-required-tools-1",children:[]},{level:3,title:"3. Sniffing traffic",slug:"_3-sniffing-traffic-1",children:[]}]}],filePathRelative:"advanced/zigbee/04_sniff_zigbee_traffic.md",git:{updatedTime:1654097687e3}}},55051:(e,n,i)=>{i.r(n),i.d(n,{default:()=>He});var t=i(66252),a=i(2493),l=i(5297),r=i(56434);const s=(0,t._)("h1",{id:"sniff-zigbee-traffic",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#sniff-zigbee-traffic","aria-hidden":"true"},"#"),(0,t.Uk)(" Sniff Zigbee traffic")],-1),o=(0,t._)("p",null,"Sniffing Zigbee traffic can be handy sometimes. E.g. when you want to analyze the commands used by a device.",-1),d=(0,t._)("h2",{id:"with-cc2531",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#with-cc2531","aria-hidden":"true"},"#"),(0,t.Uk)(" With CC2531")],-1),u=(0,t._)("h3",{id:"prerequisites",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),(0,t.Uk)(" Prerequisites")],-1),c=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("Computer "),(0,t._)("ul",null,[(0,t._)("li",null,"Ubuntu / Debian machine (tested with Ubuntu 18.04 / 18.10 and Debian 10)"),(0,t._)("li",null,"Windows machine (tested with Windows 10)")])]),(0,t._)("li",null,"CC2531 stick")],-1),h=(0,t._)("h3",{id:"_1-flashing-the-cc2531-stick",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_1-flashing-the-cc2531-stick","aria-hidden":"true"},"#"),(0,t.Uk)(" 1. Flashing the CC2531 stick")],-1),f=(0,t.Uk)("The CC2531 needs to be flashed with a sniffer firmware. Flash the firmware using the instructions from "),_=(0,t.Uk)("Flashing the CC2531"),k=(0,t.Uk)("."),p=(0,t._)("h4",{id:"linux",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),(0,t.Uk)(" Linux")],-1),w=(0,t.Uk)("The firmware is included with "),b={href:"http://www.ti.com/tool/PACKET-SNIFFER",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("PACKET-SNIFFER"),m=(0,t.Uk)(" (not "),U=(0,t._)("strong",null,"PACKET-SNIFFER-2!",-1),y=(0,t.Uk)("). Download PACKET-SNIFFER. As the sniffer firmware is only available in the windows installer we need to extract the hex file. This would require 7zip (p7zip-full or p7zip-plugins package depending on distro)"),v=(0,t._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"unzip"),(0,t.Uk)(" swrc045z.zip -d PACKET-SNIFFER\n7z e PACKET-SNIFFER/Setup_SmartRF_Packet_Sniffer_2.18.0.exe bin/general/firmware/sniffer_fw_cc2531.hex\n"),(0,t._)("span",{class:"token function"},"sudo"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"<"),(0,t.Uk)("path-to"),(0,t._)("span",{class:"token operator"},">"),(0,t.Uk)("/cc-tool -e -w "),(0,t._)("span",{class:"token operator"},"<"),(0,t.Uk)("path-to"),(0,t._)("span",{class:"token operator"},">"),(0,t.Uk)("/sniffer_fw_cc2531.hex\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br")])],-1),x=(0,t._)("h4",{id:"windows-and-possibly-ubuntu",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#windows-and-possibly-ubuntu","aria-hidden":"true"},"#"),(0,t.Uk)(" Windows (and possibly Ubuntu)")],-1),C=(0,t.Uk)("For Windows this firmware is included with "),S={href:"http://zboss.dsr-wireless.com/downloads/index/zboss",target:"_blank",rel:"noopener noreferrer"},W=(0,t.Uk)("ZBOSS"),B=(0,t.Uk)(". Register an account and download "),Z=(0,t._)("em",null,"ZBOSS Sniffer for Windows 64-bit",-1),P=(0,t.Uk)(". Included in the ZIP file is the firmware in subfolder "),T=(0,t._)("code",null,"hw\\CC2531 USB dongle\\zboss_sniffer.hex",-1),E=(0,t.Uk)(". Please note that ZBOSS is also available for Ubuntu 64-bit."),z=(0,t._)("h3",{id:"_2-installing-required-tools",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_2-installing-required-tools","aria-hidden":"true"},"#"),(0,t.Uk)(" 2. Installing required tools")],-1),O=(0,t._)("h4",{id:"ubuntu-debian",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#ubuntu-debian","aria-hidden":"true"},"#"),(0,t.Uk)(" Ubuntu / Debian")],-1),I=(0,t._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token builtin class-name"},"cd"),(0,t.Uk)(" /opt\n"),(0,t._)("span",{class:"token function"},"sudo"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"apt-get"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"install"),(0,t.Uk)(" -y libusb-1.0-0-dev wireshark\n"),(0,t._)("span",{class:"token function"},"curl"),(0,t.Uk)(" -L https://github.com/homewsn/whsniff/archive/v1.3.tar.gz "),(0,t._)("span",{class:"token operator"},"|"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"tar"),(0,t.Uk)(" zx\n"),(0,t._)("span",{class:"token builtin class-name"},"cd"),(0,t.Uk)(" whsniff-1.3\n"),(0,t._)("span",{class:"token function"},"make"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token function"},"sudo"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"make"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"install"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br")])],-1),D=(0,t._)("h4",{id:"windows",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),(0,t.Uk)(" Windows")],-1),F=(0,t.Uk)("Download and install the latest version of "),N={href:"https://www.wireshark.org/download.html",target:"_blank",rel:"noopener noreferrer"},q=(0,t.Uk)("Wireshark"),A=(0,t.Uk)(". ZBOSS itself is portable and won't need to be installed."),R=(0,t._)("h3",{id:"_3-sniffing-traffic",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_3-sniffing-traffic","aria-hidden":"true"},"#"),(0,t.Uk)(" 3. Sniffing traffic")],-1),H=(0,t.Uk)("On Ubuntu / Debian start wireshark with "),L=(0,t._)("code",null,"sudo whsniff -c ZIGBEE_CHANNEL_NUMBER | wireshark -k -i -",-1),K=(0,t.Uk)(". "),j=(0,t.Uk)("Note: Depending on your distro and installed packages, this may result in a broken pipe after some time. You will notice that Wireshark has stopped capturing, and attmpeting to resume by clicking the shark fin icon will present you with an error "),M=(0,t._)("code",null,"end of file on pipe magic during open",-1),Y=(0,t.Uk)(", if this happens you may need to start with "),G=(0,t._)("code",null,"wireshark -k -i <( path/to/whsniff -c channel_number )",-1),J=(0,t.Uk)(" instead. Alternative uses are detailed on the "),Q={href:"https://github.com/homewsn/whsniff#how-to-use-locally",target:"_blank",rel:"noopener noreferrer"},X=(0,t.Uk)("whsniff project page"),V=(0,t.Uk)("."),$=(0,t._)("p",null,[(0,t.Uk)("For Windows run the ZBOSS executable in "),(0,t._)("code",null,"gui\\zboss_sniffer.exe"),(0,t.Uk)(", enter the path to your Wireshark executable and click on the "),(0,t._)("code",null,"Start"),(0,t.Uk)(" button. For ZBOSS make sure the correct Zigbee channel is set, by default it will sniff on channel "),(0,t._)("code",null,"0x0C (12)"),(0,t.Uk)(" but the default Zigbee2MQTT channel is 11 ("),(0,t._)("code",null,"0x0B (11)"),(0,t.Uk)(").")],-1),ee=(0,t._)("p",null,"Wireshark will start and log the Zigbee messages. As these messages are encrypted we need to add 2 encryption keys. The first one is the Trust Center link key, which is the same for (almost) every Zigbee network. The second one is the network encryption key (Transport Key).",-1),ne=(0,t._)("p",null,[(0,t.Uk)("Add the Trust Center link key by going to to Edit -> Preferences -> Protocols -> ZigBee. Set Security Level to "),(0,t._)("em",null,"AES-128 Encryption, 32-bit Integrity Protection"),(0,t.Uk)(" and click on "),(0,t._)("em",null,"Edit"),(0,t.Uk)(". Click on "),(0,t._)("em",null,"+"),(0,t.Uk)(" and add "),(0,t._)("code",null,"5A:69:67:42:65:65:41:6C:6C:69:61:6E:63:65:30:39"),(0,t.Uk)(" with Byte Order Normal.")],-1),ie=(0,t.Uk)("NOTE: The Hue bridge uses a "),te={href:"https://peeveeone.com/?p=166",target:"_blank",rel:"noopener noreferrer"},ae=(0,t.Uk)("different Trust Center link key"),le=(0,t._)("p",null,[(0,t._)("img",{src:a,alt:"Wireshark Trust Center link key"})],-1),re=(0,t._)("p",null,"Next we need to figure out the network encryption key (Transport Key). There are two ways to do this:",-1),se=(0,t.uE)("<p>By default, if you haven&#39;t changed <code>network_key</code> in your <code>configuration.yaml</code> this will be <code>01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D</code>. If you changed your <code>network_key</code>, then convert each number into its 2-digit hexadecimal value, and combine them all with <code>:</code> between. E.g. <code>[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]</code> -&gt; <code>01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D</code>.</p><p>You can paste your network_key below to convert it. PS: Of course it gets not sent anywhere, just a local in-browser converter.</p>",2),oe=(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("If you don't want to translate the numbers, the network encryption key is also exposed when a device joins the network. Pair a new device to the network (or re-pair an existing one) and grab the message where the Info is "),(0,t._)("em",null,"Device Announcement...."),(0,t.Uk)(". Open the message and expand "),(0,t._)("em",null,"ZigBee Network Layer Data"),(0,t.Uk)(" -> "),(0,t._)("em",null,"ZigBee Security Header"),(0,t.Uk)(".")])],-1),de=(0,t._)("p",null,[(0,t._)("img",{src:l,alt:"Wireshark network key"})],-1),ue=(0,t._)("p",null,"Copy the key value, as shown above and go to Edit -> Preferences -> Protocols -> ZigBee -> Edit and add the key with Byte Order Normal.",-1),ce=(0,t._)("p",null,"Now Wireshark is able to decrypt the messages. When e.g. turning on a light you will see a message similar to:",-1),he=(0,t._)("p",null,[(0,t._)("img",{src:r,alt:"Wireshark packet"})],-1),fe=(0,t._)("h4",{id:"troubleshooting",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#"),(0,t.Uk)(" Troubleshooting")],-1),_e=(0,t._)("li",null,[(0,t.Uk)("If you get "),(0,t._)("code",null,"couldn't run /usr/bin/dumpcap in child process: permission denied"),(0,t.Uk)(" when running whsniff, check if /usr/bin/dumpcap is executable for everyone. Or "),(0,t._)("code",null,"chmod 755 /usr/bin/dumpcap"),(0,t.Uk)(".")],-1),ke=(0,t.Uk)("You may need to remove "),pe=(0,t._)("code",null,"modemmanager",-1),we=(0,t.Uk)(" as this has been known to cause issues. "),be=(0,t.Uk)("Howto"),ge=(0,t._)("h2",{id:"with-husbzb-1-stick",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#with-husbzb-1-stick","aria-hidden":"true"},"#"),(0,t.Uk)(" With HUSBZB-1 stick")],-1),me=(0,t._)("p",null,"If you happen to have a spare HUSBZB-1 stick, you can also use this to sniff traffic.",-1),Ue=(0,t._)("h3",{id:"prerequisites-1",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#prerequisites-1","aria-hidden":"true"},"#"),(0,t.Uk)(" Prerequisites")],-1),ye=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("Computer "),(0,t._)("ul",null,[(0,t._)("li",null,"Ubuntu machine (tested with 18.10)"),(0,t._)("li",null,"Windows machine (tested with Windows 10)")])]),(0,t._)("li",null,"HUSBZB-1 stick"),(0,t._)("li",null,"Wireshark"),(0,t._)("li",null,"Java")],-1),ve=(0,t._)("h3",{id:"_1-install-drivers",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_1-install-drivers","aria-hidden":"true"},"#"),(0,t.Uk)(" 1. Install drivers")],-1),xe=(0,t._)("h4",{id:"ubuntu",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#ubuntu","aria-hidden":"true"},"#"),(0,t.Uk)(" Ubuntu")],-1),Ce=(0,t._)("p",null,"On linux systems, the HUSBZB-1 stick should work out of the box with no modifications.",-1),Se=(0,t._)("h4",{id:"windows-1",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#windows-1","aria-hidden":"true"},"#"),(0,t.Uk)(" Windows")],-1),We=(0,t._)("p",null,"Found on https://www.amazon.com/gp/customer-reviews/RSPH6UCG0N3WK/",-1),Be=(0,t._)("ol",null,[(0,t._)("li",null,"Download Silicon Labs CP210x drivers (Amazon won't let me link this, but it should be easy to Google)"),(0,t._)("li",null,"Extract drivers to a folder (I'll use C:\\CP210x_Windows_Drivers as an example)"),(0,t._)("li",null,"Open Windows Device Manager (Win+X, M)"),(0,t._)("li",null,'Right-click on "Other Devices > HubZ ZigBee Com Port" (NOT Z-Wave) and select "Update driver"'),(0,t._)("li",null,'Select "Browse my computer for driver software"'),(0,t._)("li",null,'Select "Let me pick from a list of available drivers on my computer"'),(0,t._)("li",null,'Leave "Show All Devices" selected and click "Next"'),(0,t._)("li",null,'Click "Have Disk"'),(0,t._)("li",null,"Enter the folder name where you extracted the downloaded drivers: C:\\CP210x_Windows_Drivers"),(0,t._)("li",null,'Select "Silicon Labs CP210x USB to UART Bridge" and click "Next"'),(0,t._)("li",null,'Windows will prompt that it cannot confirm the device ID, click "Yes" to proceed.'),(0,t._)("li",null,"Write down the com port of the ZigBee device, something like COM5 or COM6."),(0,t._)("li",null,'You can find this by going to "Ports (COM & LPT)" in the device manager')],-1),Ze=(0,t._)("h3",{id:"_2-installing-required-tools-1",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_2-installing-required-tools-1","aria-hidden":"true"},"#"),(0,t.Uk)(" 2. Installing required tools")],-1),Pe=(0,t._)("p",null,"Both Windows and Ubuntu use the same program for sniffing, found https://github.com/zsmartsystems/com.zsmartsystems.zigbee.sniffer. Scroll down to the bottom to download a precompiled jar file.",-1),Te=(0,t._)("h4",{id:"ubuntu-1",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#ubuntu-1","aria-hidden":"true"},"#"),(0,t.Uk)(" Ubuntu")],-1),Ee=(0,t._)("p",null,[(0,t.Uk)("No extra software besides "),(0,t._)("code",null,"ZigbeeSniffer.jar"),(0,t.Uk)(" and Wireshark is needed")],-1),ze=(0,t._)("h4",{id:"windows-2",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#windows-2","aria-hidden":"true"},"#"),(0,t.Uk)(" Windows")],-1),Oe=(0,t._)("p",null,'Download and install https://nmap.org/npcap/ and make sure you select to install the "Npcap Loopback Adapter" when installing. It shouldn\'t matter whether or not you use Winpcap compatibility mode.',-1),Ie=(0,t._)("h3",{id:"_3-sniffing-traffic-1",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_3-sniffing-traffic-1","aria-hidden":"true"},"#"),(0,t.Uk)(" 3. Sniffing traffic")],-1),De=(0,t._)("p",null,[(0,t.Uk)("In a terminal or command line, run "),(0,t._)("code",null,"java -jar ZigbeeSniffer.jar -baud 57600 -flow hardware -port {PORT}"),(0,t.Uk)(". On Windows, "),(0,t._)("code",null,"PORT"),(0,t.Uk)(" should be replaced by "),(0,t._)("code",null,"COM5"),(0,t.Uk)(" or whatever you wrote down in step 1. On linux, "),(0,t._)("code",null,"PORT"),(0,t.Uk)(" will be something like "),(0,t._)("code",null,"/dev/ttyUSB3"),(0,t.Uk)(" or wherever you plugged in your HUSBZB-1 device.")],-1),Fe=(0,t._)("p",null,"Once you have the application running, you should see it connect to and start sniffing traffic on the network.",-1),Ne=(0,t._)("p",null,"After that, open up Wireshark and start capturing on the loopback adapter.",-1),qe=(0,t._)("p",null,[(0,t.Uk)("Then, apply a filter "),(0,t._)("code",null,"udp.port=17754"),(0,t.Uk)(" in order to filter down to only Zigbee traffic.")],-1),Ae=(0,t._)("p",null,"Lastly, follow the steps of the CC2531 instructions above to set up your encryption keys the same.",-1),Re={},He=(0,i(83744).Z)(Re,[["render",function(e,n){const i=(0,t.up)("RouterLink"),a=(0,t.up)("OutboundLink"),l=(0,t.up)("NetworkKeyConverter");return(0,t.wg)(),(0,t.iD)(t.HY,null,[s,o,d,u,c,h,(0,t._)("p",null,[f,(0,t.Wm)(i,{to:"/guide/adapters/flashing/flashing_the_cc2531.html"},{default:(0,t.w5)((()=>[_])),_:1}),k]),p,(0,t._)("p",null,[w,(0,t._)("a",b,[g,(0,t.Wm)(a)]),m,U,y]),v,x,(0,t._)("p",null,[C,(0,t._)("a",S,[W,(0,t.Wm)(a)]),B,Z,P,T,E]),z,O,I,D,(0,t._)("p",null,[F,(0,t._)("a",N,[q,(0,t.Wm)(a)]),A]),R,(0,t._)("p",null,[H,L,K,(0,t._)("em",null,[j,M,Y,G,J,(0,t._)("a",Q,[X,(0,t.Wm)(a)]),V])]),$,ee,ne,(0,t._)("p",null,[(0,t._)("em",null,[ie,(0,t._)("a",te,[ae,(0,t.Wm)(a)])])]),le,re,(0,t._)("ol",null,[(0,t._)("li",null,[se,(0,t.Wm)(l)]),oe]),de,ue,ce,he,fe,(0,t._)("ul",null,[_e,(0,t._)("li",null,[ke,pe,we,(0,t.Wm)(i,{to:"/guide/faq/#modemmanager-is-installed"},{default:(0,t.w5)((()=>[be])),_:1})])]),ge,me,Ue,ye,ve,xe,Ce,Se,We,Be,Ze,Pe,Te,Ee,ze,Oe,Ie,De,Fe,Ne,qe,Ae],64)}]])},83744:(e,n)=>{n.Z=(e,n)=>{for(const[i,t]of n)e[i]=t;return e}},5297:(e,n,i)=>{e.exports=i.p+"assets/img/wireshark_network_key.52632d94.png"},56434:(e,n,i)=>{e.exports=i.p+"assets/img/wireshark_packet.c4d91df4.png"},2493:(e,n,i)=>{e.exports=i.p+"assets/img/wireshark_tclink_key.a6e17a18.png"}}]);