import Link from 'next/link';

const svgHTML = `<svg version="1.1" id="heads_up_display" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1094 1141.6" style="enable-background:new 0 0 1094 1141.6;" xml:space="preserve"><defs><filter id="softGlowBlue" height="300%" width="300%" x="-75%" y="-75%"><feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken"></feMorphology><feGaussianBlur in="thicken" stdDeviation="10" result="blurred"></feGaussianBlur><feFlood flood-color="rgb(0,186,255)" result="glowColor"></feFlood><feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored"></feComposite><feMerge><feMergeNode in="softGlow_colored"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><filter id="softGlowRed" height="300%" width="300%" x="-75%" y="-75%"><feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken"></feMorphology><feGaussianBlur in="thicken" stdDeviation="10" result="blurred"></feGaussianBlur><feFlood flood-color="rgb(234,58,45)" result="glowColor"></feFlood><feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored"></feComposite><feMerge><feMergeNode in="softGlow_colored"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g><path class="hatching" d="M832.9,239.1l-43.9,50.2l1.4,1.2l43.9-50.1L832.9,239.1 M299.4,257.7l-22.2-26.3l1.4-1.2l22.2,26.3
L299.4,257.7z M357.9,218.8l-16.7-30l1.6-0.9l16.7,30L357.9,218.8z M427.5,188.5l-10.7-32.6l1.8-0.6l10.7,32.6L427.5,188.5z
 M501.7,172l-4.2-34l1.8-0.2l4.2,34L501.7,172z M579.5,170l-1.8-0.1l2.4-34.2l1.8,0.1L579.5,170z M654.4,182.7l-1.8-0.5l8.9-33.1
l1.8,0.5L654.4,182.7 M725.5,209.3l-1.7-0.8l15.1-30.9l1.7,0.8L725.5,209.3z M790.2,248.8l-1.5-1.2l20.8-27.4l1.5,1.1L790.2,248.8z
 M551.8,134.7h-1.9v66.4h1.8L551.8,134.7 M311.6,248.8l-20.8-27.4l1.5-1.1l20.8,27.4L311.6,248.8z M376.3,209.2l-15.1-30.8l1.6-0.8
l15.1,30.8L376.3,209.2z M447.4,182.7l-8.9-33.1l1.8-0.5l8.9,33.1L447.4,182.7z M522.3,170l-2.4-34.3l1.8-0.1l2.4,34.2L522.3,170z
 M600.1,172l-1.8-0.2l4.2-34l1.8,0.2L600.1,172z M674.2,188.5l-1.8-0.6l10.7-32.6l1.8,0.6L674.2,188.5z M743.9,218.8l-1.6-0.9
l16.7-30l1.6,0.9L743.9,218.8z M824.2,231.2l1.4,1.2l-22.2,26.2l-1.4-1.2 M268.8,239l-1.4,1.2l43.9,50.2l1.4-1.2L268.8,239
 M328.4,236.8l-19.3-28.4l1.5-1l19.3,28.4L328.4,236.8z M395.1,200.7l-13.5-31.6l1.7-0.7l13.5,31.6L395.1,200.7 M467.6,177.8
l-7.2-33.6l1.8-0.4l7.2,33.6L467.6,177.8z M537,169.1l-0.6-34.3h1.8l0.6,34.3H537z M620.6,175.1l-1.8-0.3l6-33.8l1.8,0.3
L620.6,175.1z M693.8,195.5l-1.7-0.7l12.4-32l1.7,0.7L693.8,195.5z M761.7,229.3l-1.6-1l18.3-29.1l1.6,1L761.7,229.3z M345.9,225.7
l-17.8-29.4l1.6-1l17.8,29.4L345.9,225.7z M414.4,193l-11.8-32.2l1.7-0.6l11.8,32.2L414.4,193z M487.9,174l-5.4-33.9l1.8-0.3
l5.4,33.9L487.9,174z M564.6,169.2l-1.8-0.1l1.2-34.3l1.8,0.1L564.6,169.2z M640.9,179.2l-1.8-0.4l7.8-33.4l1.8,0.4L640.9,179.2z
 M712.9,203.4l-1.7-0.8l14-31.3l1.7,0.8L712.9,203.4z M778.9,240.7l-1.5-1l19.8-28.1l1.5,1.1L778.9,240.7z M269.4,891.7l43.9-50.2
l-1.4-1.2L268,890.4L269.4,891.7 M802.9,873l22.2,26.3l-1.4,1.2l-22.2-26.3L802.9,873z M744.4,911.9l16.7,30l-1.6,0.9l-16.7-30
L744.4,911.9z M674.8,942.2l10.7,32.6l-1.8,0.6l-10.7-32.6L674.8,942.2z M600.7,958.7l4.2,34l-1.8,0.2l-4.2-34L600.7,958.7z
 M522.9,960.7l1.8,0.1l-2.4,34.2l-1.8-0.1L522.9,960.7z M447.9,948.1l1.8,0.5l-8.9,33.1l-1.8-0.5L447.9,948.1 M376.8,921.5l1.6,0.8
l-15.1,30.8l-1.6-0.8L376.8,921.5z M312.1,881.9l1.5,1.1l-20.8,27.4l-1.5-1.1L312.1,881.9z M550.5,996h1.8v-66.4h-1.8V996
 M790.7,881.9l20.8,27.4l-1.5,1.1L789.3,883L790.7,881.9z M726.1,921.5l15.1,30.8l-1.7,0.8l-15.1-30.8L726.1,921.5z M654.9,948.1
l8.9,33.1l-1.8,0.5l-8.9-33.1L654.9,948.1z M580,960.7l2.4,34.2l-1.8,0.1l-2.4-34.2L580,960.7z M502.2,958.7l1.8,0.2l-4.2,34
l-1.8-0.2L502.2,958.7z M428.1,942.2l1.8,0.6l-10.7,32.6l-1.8-0.6L428.1,942.2z M358.5,911.9l1.6,0.9l-16.7,30l-1.6-0.9
L358.5,911.9z M278.2,899.5l-1.4-1.2l22.2-26.3l1.4,1.2 M833.5,891.7l1.4-1.2l-43.9-50.2l-1.4,1.2L833.5,891.7 M773.9,893.9
l19.3,28.4l-1.5,1l-19.3-28.4L773.9,893.9z M707.2,930.1l13.5,31.6l-1.7,0.7l-13.5-31.6L707.2,930.1 M634.8,953l7.2,33.5l-1.8,0.4
l-7.2-33.5L634.8,953z M565.3,961.7l0.6,34.3h-1.8l-0.6-34.3H565.3z M481.7,955.6l1.8,0.3l-6,33.8l-1.8-0.3L481.7,955.6z
 M408.6,935.3l1.7,0.7l-12.4,32l-1.7-0.7L408.6,935.3z M340.6,901.4l1.6,1l-18.3,29.1l-1.6-1L340.6,901.4z M756.4,905l17.8,29.4
l-1.6,1L754.8,906L756.4,905z M687.9,937.7l11.8,32.2l-1.7,0.6l-11.8-32.2L687.9,937.7z M614.4,956.7l5.4,33.9l-1.8,0.3l-5.4-33.9
L614.4,956.7z M537.7,961.5l1.8,0.1l-1.2,34.3l-1.8-0.1L537.7,961.5z M461.4,951.5l1.8,0.4l-7.8,33.4l-1.8-0.4L461.4,951.5z
 M389.4,927.3l1.7,0.8l-14,31.3l-1.7-0.8L389.4,927.3z M323.4,890l1.5,1.1l-19.8,28.1l-1.5-1.1L323.4,890z"></path><g class="outer-ring outer-ring-blue"><path class="trace" d="M1061.5,750.9c-68.7,194.8-246.1,341.4-465.1,360.1c-218.7,18.7-418.2-95.5-519-275.4 M40.3,387.1
  C109.8,194,286.4,48.9,504.2,30.3c216.3-18.5,413.7,92.9,515.6,269.4"></path><path class="glow" d="M995.9,879.4c-154.4,223.9-451,298.3-692.8,174 M139.2,217.4c125.2-145.9,281.8-179.9,365-187
  c58-5,116.5-0.6,173.1,13"></path></g><g class="outer-ring outer-ring-red"><path class="trace" d="M900,244.3c123.6,131.4,166.3,328.1,93,505.9c-73.2,177.6-241.7,287-421.7,293.4 M208.4,893
  c-122-131.3-163.8-326.8-90.9-503.7c72.4-175.6,238-284.6,415.7-293.2"></path><path class="glow" d="M1028.6,587.6c-9.6,248.3-209,447.1-457.3,456 M81.7,556.8c5-169.2,99.5-322.9,248.2-403.8"></path></g><path id="Ellipse_9_copy_2" class="inner-ring" d="M672.2,896c-78.3,29.3-164.6,29.5-243.1,0.6 M430.1,243.2
c78.8-28.7,165.2-28.1,243.6,1.6"></path></g></svg>`;

export function EnterFarming() {
  const text = 'Let`s dive for a cyber adventure!';
  return (
    <div className='bg-[#792e22] py-8 md:bg-transparent md:py-0'>
      <Link
        href='/farming'
        className='left-1/2 top-1/2 z-10 mx-auto block h-80 w-80 cursor-pointer md:absolute md:-translate-x-1/2 md:-translate-y-1/2'
      >
        <div className='relative h-full rounded-full backdrop-blur-sm'>
          <div id='hud_container'>
            <div id='hud' dangerouslySetInnerHTML={{ __html: svgHTML }}></div>
          </div>
          <div className='absolute inset-0 z-10 flex animate-pulse items-center justify-center rounded-full px-14 text-center text-3xl font-bold leading-10 text-white'>
            {text}
          </div>
        </div>
      </Link>
    </div>
  );
}
