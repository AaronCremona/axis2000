import xs from 'xstream'
import {div, h1, h2, span, ul, li, a, button, img, iframe} from '@cycle/dom'
import Intro from '../../Components/Intro'
import Testimonials from '../../Components/Testimonials'
import VideoInstructions from '../../Components/VideoInstructions'
import Share from '../../Components/Share'
import Navigation from '../../Components/Navigation'

require('./style.scss')


export default function Axis(sources){
  const sinks = {
    DOM: xs.of(
      div('.app',[
        div('ordern now again'),
        a( '.link',  {
          props: {href: '/test'}
        },
        'hsldkfjsldkjfsldkfji')])
      )
  }
  let introDOM$ = Intro().DOM
  let testimonialsDOM$ = Testimonials().DOM;
  let videoInstructionsDOM$ = VideoInstructions().DOM;
  let shareDOM$ = Share().DOM;
  let navigationDOM$ = Navigation().DOM;
  let other$ = sinks.DOM;


  const axisVdom$ = xs.combine(
    introDOM$,
    testimonialsDOM$,
    videoInstructionsDOM$,
    shareDOM$,
    navigationDOM$,
    other$)
    .map(([
        introVdom,
        testimonialsVdom,
        videoInstructionsVdom,
        shareVdom,
        navigationVdom,
        sinksVDom
      ]) =>{

return    div([
      introVdom,
      testimonialsVdom,
      videoInstructionsVdom,
      shareVdom,
      navigationVdom,
      sinksVDom
    ])
  }
  )
  return {DOM: axisVdom$}
}
