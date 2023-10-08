import React from 'react'
import Navbar from './Navbar'
import drop from './mineDrop.jpg'
import logo from './minsof.png'
import drop2 from './drop2.jpg'
import drop3 from './drop3.jpg'
import {Link, Router} from 'react-router-dom'
import './MainContent.css'

export default function MainContent() {
  return (
    <div className="contain">
      <Navbar/>  
      <div >
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={drop} className="d-block w-100 backDrop" alt="mine"/>
    </div>
    <div className="carousel-item">
      <img src={drop2} className="d-block w-100 backDrop" alt="mine"/>
    </div>
    <div className="carousel-item">
      <img src={drop3} className="d-block w-100 backDrop" alt="mine"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    <section className='info'>
    <div className="banner-content-wrapper">

    <h2>Welcome to <span>Ministry of Coal</span></h2>
    <p className="banner-title-tag-line">Welcome to the website of Ministry of Coal, Government of India.</p>
    <div className="views-element-container">
        <div className="view view-basic-page view-id-basic_page view-display-id-attachment_1 js-view-dom-id-955b569bf4fcae7ec90c37eaa3895454442750ef2d9eac4c4c941462140cd8a5">
            <div className="view-content">
                <div>
                    <p className="banner-content">The Ministry of Coal has the overall responsibility of determining policies and strategies in respect of exploration and development of coal and lignite reserves, sanctioning of important projects of high value and for deciding all related issues. Under the administrative control of the Ministry, these key functions are exercised through the Public Sector Undertakings, namely, Coal India Ltd. and its subsidiaries and Neyveli Lignite corporation India Limited (NLCIL). Other than Coal India Ltd. and Neyveli Lignite Corporation India Ltd., the Ministry of Coal also has a joint venture with Government of Telangana called Singareni Collieries Company Limited. Government of Telangana holds 51% equity and Government of India holds 49 % equity.</p> <Link to="/" title="Click here to know more about Ministry of Coal">Read More &gt;</Link>
                </div>
            </div>
        </div>
    </div>
</div>

<section className="wrapper paragraph-wrapper">
    <div className="container common-container" role="main">
        <a tabIndex="-1"></a>
        <div className="layout-content">
            <section className="region region-content">
                <div className="block block-core block-page-title-block">
                </div>
                <div className="block block-system block-system-main-block">
                    <div className="layout layout--onecol">
                        <div className="layout__region layout__region--content">
                            <div className="block-region-content">
                                <div className="views-element-container block block-views block-views-blockbasic-page-block-1">
                                    <div>
                                        <div className="view view-basic-page view-id-basic_page view-display-id-block_1 js-view-dom-id-aadac55eb447036f1391cf7dce6983c188dd270b01b296d30e66ae5e4a756aa6">
                                            <div className="view-content">
                                                <div className="views-row">
                                                    <div className="views-field views-field-field-image">
                                                        <div className="field-content"><img src={logo} width="400" height="150" alt="History/Background" typeof="foaf:Image" className="image-style-max-650x650" /> </div>
                                                    </div>
                                                    <div className="views-field views-field-body">
                                                        <div className="field-content">
                                                            <h3>COAL MINING IN INDIA: THE PAST</h3>
                                                            <p>India has a long history of commercial coal mining covering nearly 220 years starting from 1774 by M/s Sumner and Heatly of East India Company in the Raniganj Coalfield along the Western bank of river Damodar. However, for about a century the growth of Indian coal mining remained sluggish for want of demand but the introduction of steam locomotives in 1853 gave a fillip to it. Within a short span, production rose to an annual average of 1 million tonne (mt) and India could produce 6.12 mts. per year by 1900 and 18 mts per year by 1920. The production got a sudden boost from the First World War but went through a slump in the early thirties. The production reached a level of 29 mts. by 1942 and 30 mts. by 1946.</p>
                                                            <p>With the advent of Independence, the country embarked upon the 5-year development plans. At the beginning of the 1st Plan, annual production went upto 33 mts. During the 1st Plan period itself, the need for increasing coal production efficiently by systematic and scientific development of the coal industry was being felt. Setting up of the National Coal Development Corporation (NCDC), a Government of India Undertaking in 1956 with the collieries owned by the railways as its nucleus was the first major step towards planned development of Indian Coal Industry. Along with the Singareni Collieries Company Ltd. (SCCL) which was already in operation since 1945 and which became a Government company under the control of Government of Andhra Pradesh in 1956, India thus had two Government coal companies in the fifties. SCCL is now a joint undertaking of Government of Andhra Pradesh and Government of India sharing its equity in 51:49 ratio.</p>
                                                            <h3>NATIONALISATION OF COAL MINES</h3>
                                                            <p>Right from its genesis, the commercial coal mining in modern times in India has been dictated by the needs of the domestic consumption. On account of the growing needs of the steel industry, a thrust had to be given on systematic exploitation of coking coal reserves in Jharia Coalfield. Adequate capital investment to meet the burgeoning energy needs of the country was not forthcoming from the private coal mine owners. Unscientific mining practices adopted by some of them and poor working conditions of labour in some of the private coal mines became matters of concern for the Government. On account of these reasons, the Central Government took a decision to nationalise the private coal mines. The nationalisation was done in two phases, the first with the coking coal mines in 1971-72 and then with the non-coking coal mines in 1973. In October, 1971, the Coking Coal Mines (Emergency Provisions) Act, 1971 provided for taking over in public interest of the management of coking coal mines and coke oven plants pending nationalisation. This was followed by the Coking Coal Mines (Nationalisation) Act, 1972 under which the coking coal mines and the coke oven plants other than those with the Tata Iron &amp; Steel Company Limited and Indian Iron &amp; Steel Company Limited, were nationalised on 1.5.1972 and brought under the Bharat Coking Coal Limited (BCCL), a new Central Government Undertaking. Another enactment, namely the Coal Mines (Taking Over of Management) Act, 1973, extended the right of the Government of India to take over the management of the coking and non-coking coal mines in seven States including the coking coal mines taken over in 1971. This was followed by the nationalisation of all these mines on 1.5.1973 with the enactment of the Coal Mines (Nationalisation) Act, 1973 which now is the piece of Central legislation determining the eligibility of coal mining in India.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</section>
    </section>
      {/* <div>
        <div className='filler'></div>
              <img className='backDrop' src={drop} alt='MiningImage'></img>
        </div> */}
        {/* <img className='logoDrop' src={logo} alt='LogoImage'></img> */}

    </div>
  )
}
