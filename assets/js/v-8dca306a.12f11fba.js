"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[68121],{17567:(e,o,t)=>{t.r(o),t.d(o,{data:()=>n});const n={key:"v-8dca306a",path:"/devices/4512726.html",title:"Namron 4512726 control via MQTT",lang:"en-US",frontmatter:{title:"Namron 4512726 control via MQTT",description:"Integrate your Namron 4512726 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-07-01T18:17:29.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Select a Color Mode (depends on the color type of the light devices the switch paired to)",slug:"select-a-color-mode-depends-on-the-color-type-of-the-light-devices-the-switch-paired-to",children:[]},{level:3,title:"Mono Color Mode",slug:"mono-color-mode",children:[]},{level:3,title:"CCT Color Mode",slug:"cct-color-mode",children:[]},{level:3,title:"RGB Color Mode",slug:"rgb-color-mode",children:[]},{level:3,title:"RGB+CCT Color Mode",slug:"rgb-cct-color-mode",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/4512726.md",git:{updatedTime:1654097687e3}}},48165:(e,o,t)=>{t.r(o),t.d(o,{default:()=>l});var n=t(66252);const i=(0,n.uE)('<h1 id="namron-4512726" tabindex="-1"><a class="header-anchor" href="#namron-4512726" aria-hidden="true">#</a> Namron 4512726</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>4512726</td></tr><tr><td>Vendor</td><td>Namron</td></tr><tr><td>Description</td><td>Zigbee 4 in 1 dimmer</td></tr><tr><td>Exposes</td><td>battery, voltage, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/4512726.jpg" alt="Namron 4512726"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>This will factory reset the device, after resetting the switch will be set into network pairing mode automatically.</p><ol><li>Short press the knob 5 times continuously and quickly.</li><li>Within 2 seconds after step 1, press and hold the knob for over 3 seconds, indicator will flash 3 times for successful reset.</li></ol><h3 id="select-a-color-mode-depends-on-the-color-type-of-the-light-devices-the-switch-paired-to" tabindex="-1"><a class="header-anchor" href="#select-a-color-mode-depends-on-the-color-type-of-the-light-devices-the-switch-paired-to" aria-hidden="true">#</a> Select a Color Mode (depends on the color type of the light devices the switch paired to)</h3><ol><li>Press and hold the knob for over 3 seconds, LED indicator turns on and stays solid on, release the knob.</li><li>Keep short pressing the knob within 5 seconds to get different color modes one by one, LED indicator status will be different for each short press to indicate different color modes. The indicator status for different color modes are as follows:</li></ol><ul><li><strong>Mono color mode</strong>: indicator keeps blinking with the frequency of twice per second, only Dim command will be sent when rotate the knob.</li><li><strong>CCT color mode</strong>: Indicator keeps blinking with the frequency as follows: blinks for 1 second (twice per second) and stops blinking for 1 second, then blinks for 1 second (twice per second) and stops blinking for 1 second again. Color temperature command will be sent when rotate the knob.</li><li><strong>RGB color mode</strong>: indicator keeps blinking with the frequency as follows: blinks for 1.5 seconds (3 times per 1.5 seconds) and stops blinking for 1 second, then blinks for 1.5 seconds (3 times per 1.5 seconds) and stops blinking for 1 second again. RGB color control command will be sent when rotate the knob.</li><li><strong>RGB+CCT color mode</strong>: indicator keeps blinking with the frequency as follows: blinks for 2 seconds (4 times per 2 seconds) and stops blinking for 1 second, then blinks for 2 seconds (4 times per 2 seconds) and stops blinking for 1 second again. RGB+CCT color control command will be sent when rotate the knob.</li></ul><h3 id="mono-color-mode" tabindex="-1"><a class="header-anchor" href="#mono-color-mode" aria-hidden="true">#</a> Mono Color Mode</h3><p><strong>Rotate the knob clockwise</strong>:</p><ol><li>Increase light intensity from 1% to 100%.</li></ol><p><strong>Rotate the knob counterclockwise</strong>:</p><ol><li>Decrease light intensity from 100% to 1%.</li></ol><h3 id="cct-color-mode" tabindex="-1"><a class="header-anchor" href="#cct-color-mode" aria-hidden="true">#</a> CCT Color Mode</h3><p><strong>Double click the knob</strong>: switch between CCT command and brightness command. Each time when switched on, the switch will send brightness command when knob rotated by default. <strong>Rotate the knob clockwise</strong>:</p><ol><li>Increase light intensity from 1% to 100% (brightness command).</li><li>Adjust color temperature from CW to WW (CCT command) <strong>Rotate the knob counterclockwise</strong>:</li><li>Decrease light intensity from 100% to 1% (brightness command).</li><li>Adjust color temperature from WW to CW (CCT command)</li></ol><h3 id="rgb-color-mode" tabindex="-1"><a class="header-anchor" href="#rgb-color-mode" aria-hidden="true">#</a> RGB Color Mode</h3><p><strong>Double click the knob</strong>: switch between RGB command and brightness command. Each time when switched on, the switch will send brightness command when knob rotated by default. <strong>Rotate the knob clockwise</strong>:</p><ol><li>Increase light intensity from 1% to 100% (brightness command).</li><li>Increase hue absolute value of RGB color(RGB command)</li></ol><p><strong>Rotate the knob counterclockwise</strong>:</p><ol><li>Decrease light intensity from 100% to 1% (brightness command).</li><li>Decrease hue absolute value of RGB color(RGB command)</li></ol><h3 id="rgb-cct-color-mode" tabindex="-1"><a class="header-anchor" href="#rgb-cct-color-mode" aria-hidden="true">#</a> RGB+CCT Color Mode</h3><p><strong>Double click the knob</strong>: switch between RGB+CCT command and brightness command. Each time when switched on, the switch will send brightness command when knob rotated by default. <strong>Rotate the knob clockwise</strong>:</p><ol><li>Increase light intensity from 1% to 100% (brightness command).</li><li>Increase hue absolute value of RGB color (1st circle) and then adjust CCT from CW to WW (2nd circle) (RGB+CCT command) <strong>Rotate the knob counterclockwise</strong>:</li><li>Decrease light intensity fram 100% to 1% (brightness command).</li><li>Decrease hue absolute value of RGB color (1st circle) and then adjust CCT from WW to CW (2nd circle) (RGB+CCT command)</li></ol><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',26),s=(0,n.Uk)("How to use device type specific configuration"),a=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_to_level</code>, <code>color_temperature_move</code>, <code>move_to_hue</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),r={},l=(0,t(83744).Z)(r,[["render",function(e,o){const t=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[i,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[s])),_:1})])]),a],64)}]])},83744:(e,o)=>{o.Z=(e,o)=>{for(const[t,n]of o)e[t]=n;return e}}}]);