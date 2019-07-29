import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import logo from './logo.svg';
import './App.css';

const animationDuration = 650
let urlPrefix = 0
const styles = {
  animationDuration: `${animationDuration}ms`,
  WebkitAnimationDuration: `${animationDuration}ms`,
};

class Home extends React.Component {
  componentWillUnmount() {
    // console.log('HOME will unmount')
  }
  render() {
    return (
        <div
          className="home"
          // style={styles}
        >
          <h1>You are on the home page</h1>
          <p>Lorem ipsum fusce non leo pharetra eu amet bibendum ultricies pharetra diam odio sapien vulputate nec ligula. Quam vivamus, nulla sit integer massa commodo eu leo <b>auctor, justo magna nulla metus ligula</b> magna amet vitae curabitur orci quam duis pellentesque, ligula <a href="/qwery">odio. Ultricies pellentesque rutrum</a> porttitor diam porta orci sem leo urna, pharetra. Amet sem nibh, eget, et ut nam porttitor <b>quisque ornare</b> ipsum, morbi vulputate, sagittis donec <i>ut morbi odio sodales vulputate et urna</i> integer. Cursus, vivamus nam porttitor risus malesuada ultricies sapien fusce eros elementum. Adipiscing ultricies et vulputate lectus elementum fusce porttitor et curabitur, pharetra justo rutrum, ornare sed donec vivamus. Non eu curabitur, molestie proin elementum leo sem integer nibh eu integer ultricies lectus nec porttitor malesuada commodo nulla fusce urna proin, sem lorem.</p><p>Pellentesque porttitor vitae sit donec&nbsp;&mdash; arcu, ultricies nam commodo nulla: quam sodales a <a href="/qwery">quam non elementum</a> at massa leo massa&nbsp;&mdash; cursus. Lorem: sem ornare molestie odio molestie metus proin magna morbi orci commodo arcu in vivamus nulla ipsum quisque metus ipsum fusce sed. Gravida proin rutrum: urna ultricies eget <a href="/qwery">amet quam proin, sagittis</a> auctor amet, vulputate sed sem mauris duis tempus diam. Nec, leo integer a adipiscing diam eu diam, maecenas nam ultricies <a href="/qwery">fusce, diam, magna non odio</a>, vitae sodales nam amet magna justo maecenas metus, nulla.</p><p>Massa elementum, diam, sodales duis, in morbi sagittis proin pharetra lectus donec: ligula cursus proin ultricies lectus vivamus sodales tempus diam sed, lorem nibh. Tempus integer nam nec integer sed lectus, molestie enim lorem porta, leo lectus rutrum cursus. Urna orci magna elementum nec magna eros metus&nbsp;&mdash; quam gravida pharetra odio elementum, sapien ut maecenas amet. Orci mauris non ornare mauris tellus&nbsp;&mdash; at magna quam auctor lorem odio. Donec elementum mattis: enim ligula amet commodo, nibh et sapien nibh ipsum arcu non odio, risus sit malesuada risus lectus auctor fusce congue: porta. <i>Pellentesque molestie ipsum, maecenas orci</i> nam quam sem, congue urna cursus maecenas integer morbi.</p><p>Amet nam, ipsum sapien orci rutrum, nibh duis magna vulputate nec congue mauris lorem ligula ultricies enim morbi malesuada. Lorem congue malesuada nulla proin <b>fusce, nam in</b> lectus quam porttitor rutrum congue diam morbi mattis fusce. Sem morbi maecenas nec cursus donec odio pharetra mauris pharetra auctor quam. Justo diam nec: auctor fusce sapien bibendum eros <b>morbi orci</b> quisque rutrum sit orci sagittis orci eu, pellentesque.</p><p>Bibendum quam eros nec <b>mattis at: nibh</b> rutrum nec sit ipsum ornare, cursus duis malesuada porta. Vivamus <a href="/qwery">arcu adipiscing non</a>, vitae enim, integer, commodo ut porta magna ut, ligula, auctor, congue eu.</p> 
          <p>Lorem ipsum fusce non leo pharetra eu amet bibendum ultricies pharetra diam odio sapien vulputate nec ligula. Quam vivamus, nulla sit integer massa commodo eu leo <b>auctor, justo magna nulla metus ligula</b> magna amet vitae curabitur orci quam duis pellentesque, ligula <a href="/qwery">odio. Ultricies pellentesque rutrum</a> porttitor diam porta orci sem leo urna, pharetra. Amet sem nibh, eget, et ut nam porttitor <b>quisque ornare</b> ipsum, morbi vulputate, sagittis donec <i>ut morbi odio sodales vulputate et urna</i> integer. Cursus, vivamus nam porttitor risus malesuada ultricies sapien fusce eros elementum. Adipiscing ultricies et vulputate lectus elementum fusce porttitor et curabitur, pharetra justo rutrum, ornare sed donec vivamus. Non eu curabitur, molestie proin elementum leo sem integer nibh eu integer ultricies lectus nec porttitor malesuada commodo nulla fusce urna proin, sem lorem.</p><p>Pellentesque porttitor vitae sit donec&nbsp;&mdash; arcu, ultricies nam commodo nulla: quam sodales a <a href="/qwery">quam non elementum</a> at massa leo massa&nbsp;&mdash; cursus. Lorem: sem ornare molestie odio molestie metus proin magna morbi orci commodo arcu in vivamus nulla ipsum quisque metus ipsum fusce sed. Gravida proin rutrum: urna ultricies eget <a href="/qwery">amet quam proin, sagittis</a> auctor amet, vulputate sed sem mauris duis tempus diam. Nec, leo integer a adipiscing diam eu diam, maecenas nam ultricies <a href="/qwery">fusce, diam, magna non odio</a>, vitae sodales nam amet magna justo maecenas metus, nulla.</p><p>Massa elementum, diam, sodales duis, in morbi sagittis proin pharetra lectus donec: ligula cursus proin ultricies lectus vivamus sodales tempus diam sed, lorem nibh. Tempus integer nam nec integer sed lectus, molestie enim lorem porta, leo lectus rutrum cursus. Urna orci magna elementum nec magna eros metus&nbsp;&mdash; quam gravida pharetra odio elementum, sapien ut maecenas amet. Orci mauris non ornare mauris tellus&nbsp;&mdash; at magna quam auctor lorem odio. Donec elementum mattis: enim ligula amet commodo, nibh et sapien nibh ipsum arcu non odio, risus sit malesuada risus lectus auctor fusce congue: porta. <i>Pellentesque molestie ipsum, maecenas orci</i> nam quam sem, congue urna cursus maecenas integer morbi.</p><p>Amet nam, ipsum sapien orci rutrum, nibh duis magna vulputate nec congue mauris lorem ligula ultricies enim morbi malesuada. Lorem congue malesuada nulla proin <b>fusce, nam in</b> lectus quam porttitor rutrum congue diam morbi mattis fusce. Sem morbi maecenas nec cursus donec odio pharetra mauris pharetra auctor quam. Justo diam nec: auctor fusce sapien bibendum eros <b>morbi orci</b> quisque rutrum sit orci sagittis orci eu, pellentesque.</p><p>Bibendum quam eros nec <b>mattis at: nibh</b> rutrum nec sit ipsum ornare, cursus duis malesuada porta. Vivamus <a href="/qwery">arcu adipiscing non</a>, vitae enim, integer, commodo ut porta magna ut, ligula, auctor, congue eu.</p> 
          <p>Lorem ipsum fusce non leo pharetra eu amet bibendum ultricies pharetra diam odio sapien vulputate nec ligula. Quam vivamus, nulla sit integer massa commodo eu leo <b>auctor, justo magna nulla metus ligula</b> magna amet vitae curabitur orci quam duis pellentesque, ligula <a href="/qwery">odio. Ultricies pellentesque rutrum</a> porttitor diam porta orci sem leo urna, pharetra. Amet sem nibh, eget, et ut nam porttitor <b>quisque ornare</b> ipsum, morbi vulputate, sagittis donec <i>ut morbi odio sodales vulputate et urna</i> integer. Cursus, vivamus nam porttitor risus malesuada ultricies sapien fusce eros elementum. Adipiscing ultricies et vulputate lectus elementum fusce porttitor et curabitur, pharetra justo rutrum, ornare sed donec vivamus. Non eu curabitur, molestie proin elementum leo sem integer nibh eu integer ultricies lectus nec porttitor malesuada commodo nulla fusce urna proin, sem lorem.</p><p>Pellentesque porttitor vitae sit donec&nbsp;&mdash; arcu, ultricies nam commodo nulla: quam sodales a <a href="/qwery">quam non elementum</a> at massa leo massa&nbsp;&mdash; cursus. Lorem: sem ornare molestie odio molestie metus proin magna morbi orci commodo arcu in vivamus nulla ipsum quisque metus ipsum fusce sed. Gravida proin rutrum: urna ultricies eget <a href="/qwery">amet quam proin, sagittis</a> auctor amet, vulputate sed sem mauris duis tempus diam. Nec, leo integer a adipiscing diam eu diam, maecenas nam ultricies <a href="/qwery">fusce, diam, magna non odio</a>, vitae sodales nam amet magna justo maecenas metus, nulla.</p><p>Massa elementum, diam, sodales duis, in morbi sagittis proin pharetra lectus donec: ligula cursus proin ultricies lectus vivamus sodales tempus diam sed, lorem nibh. Tempus integer nam nec integer sed lectus, molestie enim lorem porta, leo lectus rutrum cursus. Urna orci magna elementum nec magna eros metus&nbsp;&mdash; quam gravida pharetra odio elementum, sapien ut maecenas amet. Orci mauris non ornare mauris tellus&nbsp;&mdash; at magna quam auctor lorem odio. Donec elementum mattis: enim ligula amet commodo, nibh et sapien nibh ipsum arcu non odio, risus sit malesuada risus lectus auctor fusce congue: porta. <i>Pellentesque molestie ipsum, maecenas orci</i> nam quam sem, congue urna cursus maecenas integer morbi.</p><p>Amet nam, ipsum sapien orci rutrum, nibh duis magna vulputate nec congue mauris lorem ligula ultricies enim morbi malesuada. Lorem congue malesuada nulla proin <b>fusce, nam in</b> lectus quam porttitor rutrum congue diam morbi mattis fusce. Sem morbi maecenas nec cursus donec odio pharetra mauris pharetra auctor quam. Justo diam nec: auctor fusce sapien bibendum eros <b>morbi orci</b> quisque rutrum sit orci sagittis orci eu, pellentesque.</p><p>Bibendum quam eros nec <b>mattis at: nibh</b> rutrum nec sit ipsum ornare, cursus duis malesuada porta. Vivamus <a href="/qwery">arcu adipiscing non</a>, vitae enim, integer, commodo ut porta magna ut, ligula, auctor, congue eu.</p> 
        </div>
    )
  }
}

class Other extends React.Component {
  componentWillUnmount() {
    // console.log('Other will unmount')
  }
  render() {
    return (      
        <div
          className="other"
          // style={styles}
         >
          <h1>You are on the other page</h1>
          
          <p>Lorem ipsum nibh at, rutrum urna leo maecenas, nam urna magna tellus cursus, quam curabitur auctor. Proin odio nulla a sapien at metus bibendum eu&nbsp;&mdash; gravida risus. Adipiscing, <b>eget et ligula</b> mattis ipsum nam elementum eu quisque, eget sapien commodo leo ut eget vivamus pharetra tellus tempus gravida arcu. Enim metus cursus <b>ornare elementum</b> mattis gravida vulputate justo sit orci metus. Tellus in vitae adipiscing, ut non odio in ornare sit arcu sodales proin vitae, duis et proin ipsum metus.</p><p>Enim commodo molestie rutrum elementum <i>integer auctor cursus</i> fusce in eros ultricies curabitur odio gravida mattis eget. Nulla ut sagittis vivamus eros magna orci tempus gravida sodales metus molestie vivamus ut sagittis metus. Molestie quam morbi cursus pharetra <b>sed tellus curabitur</b>, metus amet metus rutrum donec ut massa adipiscing nibh, non fusce. Sed pharetra <i>enim maecenas</i> mattis bibendum duis curabitur urna&nbsp;&mdash; magna cursus <i>ipsum in fusce adipiscing orci ultricies</i> et. Sit elementum lectus eget quam&nbsp;&mdash; congue <a href="/qwery">et quam vivamus</a> odio sit commodo, diam porttitor enim <b>porttitor pellentesque auctor lectus.</b> Nibh in, nam pharetra&nbsp;&mdash; maecenas cursus quam&nbsp;&mdash; vivamus, justo odio sagittis gravida sit, urna leo a, tellus pellentesque. Rutrum, molestie, risus mauris nibh metus malesuada vulputate urna curabitur rutrum, congue diam sagittis diam donec sapien nec auctor amet: porta.</p><p>Duis magna enim rutrum orci gravida tellus molestie, vitae, tempus vitae metus bibendum pellentesque at ligula. Donec nec&nbsp;&mdash; amet metus diam quam diam commodo ut eget commodo malesuada, sit vulputate malesuada arcu justo ut sagittis porttitor enim. Molestie vivamus <a href="/qwery">duis porttitor</a> mauris metus malesuada sagittis, non magna quisque sodales malesuada <i>magna integer ut, pharetra nec porta.</i> Adipiscing quam congue curabitur&nbsp;&mdash; mattis quisque ornare mauris, nibh fusce urna mattis. <i>Non pellentesque bibendum, porttitor quisque</i>, ornare amet, risus sapien commodo bibendum maecenas ipsum sed orci, amet <a href="/qwery">ligula ut.</a></p><p>Bibendum nec diam arcu morbi <b>duis sit porta</b> sagittis lectus sem donec gravida commodo justo enim elementum donec ornare: nulla ut orci. <a href="/qwery">Adipiscing sem, urna at</a> sagittis sed congue nibh pellentesque at nam. Justo maecenas, pellentesque nam eget, urna, in vivamus proin sit auctor nibh eu leo orci donec pellentesque arcu, in commodo integer adipiscing sit. Congue nulla magna nec mauris porta metus, <b>leo donec</b> malesuada sem, a nam rutrum diam, eget pharetra vulputate, duis arcu maecenas. Non sed orci&nbsp;&mdash; vitae, metus malesuada, nec porttitor tempus sed massa tempus nibh, non metus justo <b>leo: diam</b> porta vivamus.</p><p>Nec leo magna sit in et tempus ligula at, mattis nulla donec ligula ornare cursus, nam sodales quisque porta, quisque ligula proin et amet. Nibh integer curabitur nam ultricies enim molestie amet <i>tempus&nbsp;&mdash; vulputate bibendum leo.</i> Commodo molestie at sem justo <a href="/qwery">curabitur mattis odio vulputate ligula</a> curabitur gravida enim proin ut malesuada, risus sapien eu pellentesque ornare sem sapien nam. Duis, auctor ornare eget, <a href="/qwery">lectus nec</a> vulputate maecenas porta pellentesque eros elementum, ornare sed quisque sapien.</p> 
          <p>Lorem ipsum nibh at, rutrum urna leo maecenas, nam urna magna tellus cursus, quam curabitur auctor. Proin odio nulla a sapien at metus bibendum eu&nbsp;&mdash; gravida risus. Adipiscing, <b>eget et ligula</b> mattis ipsum nam elementum eu quisque, eget sapien commodo leo ut eget vivamus pharetra tellus tempus gravida arcu. Enim metus cursus <b>ornare elementum</b> mattis gravida vulputate justo sit orci metus. Tellus in vitae adipiscing, ut non odio in ornare sit arcu sodales proin vitae, duis et proin ipsum metus.</p><p>Enim commodo molestie rutrum elementum <i>integer auctor cursus</i> fusce in eros ultricies curabitur odio gravida mattis eget. Nulla ut sagittis vivamus eros magna orci tempus gravida sodales metus molestie vivamus ut sagittis metus. Molestie quam morbi cursus pharetra <b>sed tellus curabitur</b>, metus amet metus rutrum donec ut massa adipiscing nibh, non fusce. Sed pharetra <i>enim maecenas</i> mattis bibendum duis curabitur urna&nbsp;&mdash; magna cursus <i>ipsum in fusce adipiscing orci ultricies</i> et. Sit elementum lectus eget quam&nbsp;&mdash; congue <a href="/qwery">et quam vivamus</a> odio sit commodo, diam porttitor enim <b>porttitor pellentesque auctor lectus.</b> Nibh in, nam pharetra&nbsp;&mdash; maecenas cursus quam&nbsp;&mdash; vivamus, justo odio sagittis gravida sit, urna leo a, tellus pellentesque. Rutrum, molestie, risus mauris nibh metus malesuada vulputate urna curabitur rutrum, congue diam sagittis diam donec sapien nec auctor amet: porta.</p><p>Duis magna enim rutrum orci gravida tellus molestie, vitae, tempus vitae metus bibendum pellentesque at ligula. Donec nec&nbsp;&mdash; amet metus diam quam diam commodo ut eget commodo malesuada, sit vulputate malesuada arcu justo ut sagittis porttitor enim. Molestie vivamus <a href="/qwery">duis porttitor</a> mauris metus malesuada sagittis, non magna quisque sodales malesuada <i>magna integer ut, pharetra nec porta.</i> Adipiscing quam congue curabitur&nbsp;&mdash; mattis quisque ornare mauris, nibh fusce urna mattis. <i>Non pellentesque bibendum, porttitor quisque</i>, ornare amet, risus sapien commodo bibendum maecenas ipsum sed orci, amet <a href="/qwery">ligula ut.</a></p><p>Bibendum nec diam arcu morbi <b>duis sit porta</b> sagittis lectus sem donec gravida commodo justo enim elementum donec ornare: nulla ut orci. <a href="/qwery">Adipiscing sem, urna at</a> sagittis sed congue nibh pellentesque at nam. Justo maecenas, pellentesque nam eget, urna, in vivamus proin sit auctor nibh eu leo orci donec pellentesque arcu, in commodo integer adipiscing sit. Congue nulla magna nec mauris porta metus, <b>leo donec</b> malesuada sem, a nam rutrum diam, eget pharetra vulputate, duis arcu maecenas. Non sed orci&nbsp;&mdash; vitae, metus malesuada, nec porttitor tempus sed massa tempus nibh, non metus justo <b>leo: diam</b> porta vivamus.</p><p>Nec leo magna sit in et tempus ligula at, mattis nulla donec ligula ornare cursus, nam sodales quisque porta, quisque ligula proin et amet. Nibh integer curabitur nam ultricies enim molestie amet <i>tempus&nbsp;&mdash; vulputate bibendum leo.</i> Commodo molestie at sem justo <a href="/qwery">curabitur mattis odio vulputate ligula</a> curabitur gravida enim proin ut malesuada, risus sapien eu pellentesque ornare sem sapien nam. Duis, auctor ornare eget, <a href="/qwery">lectus nec</a> vulputate maecenas porta pellentesque eros elementum, ornare sed quisque sapien.</p> 
          <p>Lorem ipsum nibh at, rutrum urna leo maecenas, nam urna magna tellus cursus, quam curabitur auctor. Proin odio nulla a sapien at metus bibendum eu&nbsp;&mdash; gravida risus. Adipiscing, <b>eget et ligula</b> mattis ipsum nam elementum eu quisque, eget sapien commodo leo ut eget vivamus pharetra tellus tempus gravida arcu. Enim metus cursus <b>ornare elementum</b> mattis gravida vulputate justo sit orci metus. Tellus in vitae adipiscing, ut non odio in ornare sit arcu sodales proin vitae, duis et proin ipsum metus.</p><p>Enim commodo molestie rutrum elementum <i>integer auctor cursus</i> fusce in eros ultricies curabitur odio gravida mattis eget. Nulla ut sagittis vivamus eros magna orci tempus gravida sodales metus molestie vivamus ut sagittis metus. Molestie quam morbi cursus pharetra <b>sed tellus curabitur</b>, metus amet metus rutrum donec ut massa adipiscing nibh, non fusce. Sed pharetra <i>enim maecenas</i> mattis bibendum duis curabitur urna&nbsp;&mdash; magna cursus <i>ipsum in fusce adipiscing orci ultricies</i> et. Sit elementum lectus eget quam&nbsp;&mdash; congue <a href="/qwery">et quam vivamus</a> odio sit commodo, diam porttitor enim <b>porttitor pellentesque auctor lectus.</b> Nibh in, nam pharetra&nbsp;&mdash; maecenas cursus quam&nbsp;&mdash; vivamus, justo odio sagittis gravida sit, urna leo a, tellus pellentesque. Rutrum, molestie, risus mauris nibh metus malesuada vulputate urna curabitur rutrum, congue diam sagittis diam donec sapien nec auctor amet: porta.</p><p>Duis magna enim rutrum orci gravida tellus molestie, vitae, tempus vitae metus bibendum pellentesque at ligula. Donec nec&nbsp;&mdash; amet metus diam quam diam commodo ut eget commodo malesuada, sit vulputate malesuada arcu justo ut sagittis porttitor enim. Molestie vivamus <a href="/qwery">duis porttitor</a> mauris metus malesuada sagittis, non magna quisque sodales malesuada <i>magna integer ut, pharetra nec porta.</i> Adipiscing quam congue curabitur&nbsp;&mdash; mattis quisque ornare mauris, nibh fusce urna mattis. <i>Non pellentesque bibendum, porttitor quisque</i>, ornare amet, risus sapien commodo bibendum maecenas ipsum sed orci, amet <a href="/qwery">ligula ut.</a></p><p>Bibendum nec diam arcu morbi <b>duis sit porta</b> sagittis lectus sem donec gravida commodo justo enim elementum donec ornare: nulla ut orci. <a href="/qwery">Adipiscing sem, urna at</a> sagittis sed congue nibh pellentesque at nam. Justo maecenas, pellentesque nam eget, urna, in vivamus proin sit auctor nibh eu leo orci donec pellentesque arcu, in commodo integer adipiscing sit. Congue nulla magna nec mauris porta metus, <b>leo donec</b> malesuada sem, a nam rutrum diam, eget pharetra vulputate, duis arcu maecenas. Non sed orci&nbsp;&mdash; vitae, metus malesuada, nec porttitor tempus sed massa tempus nibh, non metus justo <b>leo: diam</b> porta vivamus.</p><p>Nec leo magna sit in et tempus ligula at, mattis nulla donec ligula ornare cursus, nam sodales quisque porta, quisque ligula proin et amet. Nibh integer curabitur nam ultricies enim molestie amet <i>tempus&nbsp;&mdash; vulputate bibendum leo.</i> Commodo molestie at sem justo <a href="/qwery">curabitur mattis odio vulputate ligula</a> curabitur gravida enim proin ut malesuada, risus sapien eu pellentesque ornare sem sapien nam. Duis, auctor ornare eget, <a href="/qwery">lectus nec</a> vulputate maecenas porta pellentesque eros elementum, ornare sed quisque sapien.</p> 
          <p>Lorem ipsum nibh at, rutrum urna leo maecenas, nam urna magna tellus cursus, quam curabitur auctor. Proin odio nulla a sapien at metus bibendum eu&nbsp;&mdash; gravida risus. Adipiscing, <b>eget et ligula</b> mattis ipsum nam elementum eu quisque, eget sapien commodo leo ut eget vivamus pharetra tellus tempus gravida arcu. Enim metus cursus <b>ornare elementum</b> mattis gravida vulputate justo sit orci metus. Tellus in vitae adipiscing, ut non odio in ornare sit arcu sodales proin vitae, duis et proin ipsum metus.</p><p>Enim commodo molestie rutrum elementum <i>integer auctor cursus</i> fusce in eros ultricies curabitur odio gravida mattis eget. Nulla ut sagittis vivamus eros magna orci tempus gravida sodales metus molestie vivamus ut sagittis metus. Molestie quam morbi cursus pharetra <b>sed tellus curabitur</b>, metus amet metus rutrum donec ut massa adipiscing nibh, non fusce. Sed pharetra <i>enim maecenas</i> mattis bibendum duis curabitur urna&nbsp;&mdash; magna cursus <i>ipsum in fusce adipiscing orci ultricies</i> et. Sit elementum lectus eget quam&nbsp;&mdash; congue <a href="/qwery">et quam vivamus</a> odio sit commodo, diam porttitor enim <b>porttitor pellentesque auctor lectus.</b> Nibh in, nam pharetra&nbsp;&mdash; maecenas cursus quam&nbsp;&mdash; vivamus, justo odio sagittis gravida sit, urna leo a, tellus pellentesque. Rutrum, molestie, risus mauris nibh metus malesuada vulputate urna curabitur rutrum, congue diam sagittis diam donec sapien nec auctor amet: porta.</p><p>Duis magna enim rutrum orci gravida tellus molestie, vitae, tempus vitae metus bibendum pellentesque at ligula. Donec nec&nbsp;&mdash; amet metus diam quam diam commodo ut eget commodo malesuada, sit vulputate malesuada arcu justo ut sagittis porttitor enim. Molestie vivamus <a href="/qwery">duis porttitor</a> mauris metus malesuada sagittis, non magna quisque sodales malesuada <i>magna integer ut, pharetra nec porta.</i> Adipiscing quam congue curabitur&nbsp;&mdash; mattis quisque ornare mauris, nibh fusce urna mattis. <i>Non pellentesque bibendum, porttitor quisque</i>, ornare amet, risus sapien commodo bibendum maecenas ipsum sed orci, amet <a href="/qwery">ligula ut.</a></p><p>Bibendum nec diam arcu morbi <b>duis sit porta</b> sagittis lectus sem donec gravida commodo justo enim elementum donec ornare: nulla ut orci. <a href="/qwery">Adipiscing sem, urna at</a> sagittis sed congue nibh pellentesque at nam. Justo maecenas, pellentesque nam eget, urna, in vivamus proin sit auctor nibh eu leo orci donec pellentesque arcu, in commodo integer adipiscing sit. Congue nulla magna nec mauris porta metus, <b>leo donec</b> malesuada sem, a nam rutrum diam, eget pharetra vulputate, duis arcu maecenas. Non sed orci&nbsp;&mdash; vitae, metus malesuada, nec porttitor tempus sed massa tempus nibh, non metus justo <b>leo: diam</b> porta vivamus.</p><p>Nec leo magna sit in et tempus ligula at, mattis nulla donec ligula ornare cursus, nam sodales quisque porta, quisque ligula proin et amet. Nibh integer curabitur nam ultricies enim molestie amet <i>tempus&nbsp;&mdash; vulputate bibendum leo.</i> Commodo molestie at sem justo <a href="/qwery">curabitur mattis odio vulputate ligula</a> curabitur gravida enim proin ut malesuada, risus sapien eu pellentesque ornare sem sapien nam. Duis, auctor ornare eget, <a href="/qwery">lectus nec</a> vulputate maecenas porta pellentesque eros elementum, ornare sed quisque sapien.</p> 
          <p>Lorem ipsum nibh at, rutrum urna leo maecenas, nam urna magna tellus cursus, quam curabitur auctor. Proin odio nulla a sapien at metus bibendum eu&nbsp;&mdash; gravida risus. Adipiscing, <b>eget et ligula</b> mattis ipsum nam elementum eu quisque, eget sapien commodo leo ut eget vivamus pharetra tellus tempus gravida arcu. Enim metus cursus <b>ornare elementum</b> mattis gravida vulputate justo sit orci metus. Tellus in vitae adipiscing, ut non odio in ornare sit arcu sodales proin vitae, duis et proin ipsum metus.</p><p>Enim commodo molestie rutrum elementum <i>integer auctor cursus</i> fusce in eros ultricies curabitur odio gravida mattis eget. Nulla ut sagittis vivamus eros magna orci tempus gravida sodales metus molestie vivamus ut sagittis metus. Molestie quam morbi cursus pharetra <b>sed tellus curabitur</b>, metus amet metus rutrum donec ut massa adipiscing nibh, non fusce. Sed pharetra <i>enim maecenas</i> mattis bibendum duis curabitur urna&nbsp;&mdash; magna cursus <i>ipsum in fusce adipiscing orci ultricies</i> et. Sit elementum lectus eget quam&nbsp;&mdash; congue <a href="/qwery">et quam vivamus</a> odio sit commodo, diam porttitor enim <b>porttitor pellentesque auctor lectus.</b> Nibh in, nam pharetra&nbsp;&mdash; maecenas cursus quam&nbsp;&mdash; vivamus, justo odio sagittis gravida sit, urna leo a, tellus pellentesque. Rutrum, molestie, risus mauris nibh metus malesuada vulputate urna curabitur rutrum, congue diam sagittis diam donec sapien nec auctor amet: porta.</p><p>Duis magna enim rutrum orci gravida tellus molestie, vitae, tempus vitae metus bibendum pellentesque at ligula. Donec nec&nbsp;&mdash; amet metus diam quam diam commodo ut eget commodo malesuada, sit vulputate malesuada arcu justo ut sagittis porttitor enim. Molestie vivamus <a href="/qwery">duis porttitor</a> mauris metus malesuada sagittis, non magna quisque sodales malesuada <i>magna integer ut, pharetra nec porta.</i> Adipiscing quam congue curabitur&nbsp;&mdash; mattis quisque ornare mauris, nibh fusce urna mattis. <i>Non pellentesque bibendum, porttitor quisque</i>, ornare amet, risus sapien commodo bibendum maecenas ipsum sed orci, amet <a href="/qwery">ligula ut.</a></p><p>Bibendum nec diam arcu morbi <b>duis sit porta</b> sagittis lectus sem donec gravida commodo justo enim elementum donec ornare: nulla ut orci. <a href="/qwery">Adipiscing sem, urna at</a> sagittis sed congue nibh pellentesque at nam. Justo maecenas, pellentesque nam eget, urna, in vivamus proin sit auctor nibh eu leo orci donec pellentesque arcu, in commodo integer adipiscing sit. Congue nulla magna nec mauris porta metus, <b>leo donec</b> malesuada sem, a nam rutrum diam, eget pharetra vulputate, duis arcu maecenas. Non sed orci&nbsp;&mdash; vitae, metus malesuada, nec porttitor tempus sed massa tempus nibh, non metus justo <b>leo: diam</b> porta vivamus.</p><p>Nec leo magna sit in et tempus ligula at, mattis nulla donec ligula ornare cursus, nam sodales quisque porta, quisque ligula proin et amet. Nibh integer curabitur nam ultricies enim molestie amet <i>tempus&nbsp;&mdash; vulputate bibendum leo.</i> Commodo molestie at sem justo <a href="/qwery">curabitur mattis odio vulputate ligula</a> curabitur gravida enim proin ut malesuada, risus sapien eu pellentesque ornare sem sapien nam. Duis, auctor ornare eget, <a href="/qwery">lectus nec</a> vulputate maecenas porta pellentesque eros elementum, ornare sed quisque sapien.</p> 
        </div>
    )
  }
}

class Router extends Component {
  constructor(props) {
    super(props)

    const { location, history } = this.props
    this.state = {
      key: location.key,
      length: history.length,
      direction: 'forward', // 'back'
    }
  }
  componentWillReceiveProps(nextProps) {
    
    const { location } = this.props
    const { history } = nextProps
    const { length: currentLength } = this.state
    
    const { length } = history
    // console.log(location.pathname, '::VS::', nextProps.location.pathname)
    // console.log(currentLength, '::VS::', length)
    let direction = 'forward'

    if (currentLength === length) {
      direction = 'back'
    }
    
    if (location.pathname !== nextProps.location.pathname && currentLength !== length) {
      direction = 'forward'
    }
    // console.log('Will set direction: ', direction, currentLength, length)

    this.setState({ length, direction })
  }
  render() {
    const { location, history } = this.props
    const { direction } = this.state
    console.log('DIRECTION:', direction)
    return (
      <div
        className={
          `animated-routes ${
            direction === 'forward'
              ? 'animated-routes--current-slide-in-right' : '' } ${
            direction === 'back'
              ? 'animated-routes--previous-slide-out-right' : '' }`
          }
      >
        <TransitionGroup>
        <CSSTransition
          in={true}
          key={location.key}
          classNames={{
            enter: 'animated-routes__route--enter',
            exit: 'animated-routes__route--leave',
          }}
          timeout={animationDuration}
          unmountOnExit
        >
          <Switch location={location}>
            <Route exact path='/' render={() => <RouteWrapper Component={Home} location={location} history={history} />}/>  
            <Route exact path='/other' render={() => <RouteWrapper Component={Other} location={location} history={history} />}/>
          </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
} 

class RouteWrapper extends Component {
  componentWillUnmount() {
    // console.log('Rout will unmount', this.isCurrent(), this.isPrevious())
  }
  render() {
    const { Component } = this.props
    // console.log('>>>', this.isCurrent(), this.isPrevious())
    return (
      <div
        className={`animated-routes__route ${this.isCurrent() ? 'animated-routes__route--current' : '' } ${this.isPrevious() ? 'animated-routes__route--previous' : ''}`}
        style={styles}
      >
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <ul>
            <li>
              <Link to={`/?a=${urlPrefix}`} onClick={() => { urlPrefix += 1}}>Home</Link>
            </li>
            <li>
              <Link to={`/other?a=${urlPrefix}`} onClick={() => { urlPrefix += 1}}>Other</Link>
            </li>
          </ul>
        <Component {...this.props} />
      </div>

    )
  }
  isCurrent() {
    const { history, location } = this.props

    const isCurrent = location.pathname === history.location.pathname

    return isCurrent;
  }

  isPrevious() {
    const { history, location } = this.props
    const isPrevious = location.pathname !== history.location.pathname

    return isPrevious;
  }
}

// class App extends Component {
  
//   render() {
//     const { location, history } = this.props
//     console.log(1, this.props)

//     return (
//       <div className="App">
//         <Router location={location} history={history} />
//       </div>
//     );
//   }
// }

export default withRouter(Router);
