import React, {useEffect, useRef} from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import Chart from 'chart.js/auto'
const Contact = () => {

const chartRef = useRef(null);
const chartInstance = useRef(null);

useEffect(()=>{
    if(chartInstance.current){
      chartInstance.current.destroy()
    }
    const myChartRef = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(myChartRef, {
      type:"pie", 
      data:{
        labels: ["Technology & Innovation ","Marketing & Branding", "Legal & Compliance", "Funding & Investment"],
        datasets :[
          {
            data: [300, 50, 100, 80],
            backgroundColor: [
              'rgb(9, 38, 53)',
              'rgb(92, 131, 116)',
              'rgb(27, 66, 66)',
              'rgb(158, 200, 185)'
            ],
          }
        ]
      }
    })
    return ()=>{
      if(chartInstance.current){
        chartInstance.current.destroy()
      }
    }
}, []);

  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orange1Text">Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
              {/*<div className="image-container">
            <img src="./house2.jpg" alt="" />
          </div>*/}
          <div>
          <span className="orangeText">Explore the Diversity of Properties</span>
         
      
            <canvas ref={chartRef} style={{width:"300px", height:"200px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;