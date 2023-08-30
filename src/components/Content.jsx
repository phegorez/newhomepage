import './Content.css'
import retroPCs from '../assets/image-retro-pcs.jpg'
import topLaptops from '../assets/image-top-laptops.jpg'
import gamingGrowth from '../assets/image-gaming-growth.jpg'
import web3Desktop from '../assets/image-web-3-desktop.jpg'
import web3Mobile from '../assets/image-web-3-mobile.jpg'
import Logo from '../assets/logo.svg'
import { useState } from 'react'



const Content = () => {

    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const dynamicImg = () => {
        if (windowSize >= 390 && windowSize < 768) {
            return web3Mobile
        }
        else {
            return web3Desktop
        }
    }
    return (
        <main>
            <section className="contents-container">

                <article className="content-1">
                    <img src={dynamicImg()} alt='web-3' />
                </article>

                <article className="content-2">
                    <h1>
                        The Bright Future of Web 3.0?
                    </h1>
                </article>

                <article className="content-3">
                    <p>We dive into the next evolution of the web that claims to put power of the platforms back into the hands of the people. But is it really fulfilling it is promise?</p>
                    <button>
                        READ MORE
                    </button>
                </article>

                <article className="content-4">
                    <h1>New</h1>
                    <div className="details">
                        <h3>
                            Hydrogen VS Electric Cars
                        </h3>
                        <p>
                            Will Hydrogen-fueled cars ever catch up to EVs?
                        </p>
                    </div>
                    <div className="details">
                        <h3>
                            The Downsides of AI Artisty
                        </h3>
                        <p>
                            What are the possible adverse effect of on-demand AI image generation?
                        </p>
                    </div>
                    <div className="details">
                        <h3>
                            Is VS Funding Dying Up?
                        </h3>
                        <p>
                            Private funding by VC firms is down 50% YOY. We take a look at whate that means.
                        </p>
                    </div>
                </article>

                <article className="card card-1">
                    <img src={retroPCs} alt="" />
                    <div className="card-details">
                        <h1>01</h1>
                        <h2>Reviving Retro PCs</h2>
                        <p>
                            What happens when old PCs are given modern upgrades?
                        </p>
                    </div>
                </article>
                <article className="card card-2">
                    <img src={topLaptops} alt="" />
                    <div className="card-details">
                        <h1>02</h1>
                        <h2>Top 10 Laptops of 2022</h2>
                        <p>
                            Our best picks for various needs and bugets.
                        </p>
                    </div>
                </article>
                <article className="card card-3">
                    <img src={gamingGrowth} alt="" />
                    <div className="card-details">
                        <h1>03</h1>
                        <h2>The Growth of Gaming</h2>
                        <p>
                            How the pandemic has sparked fresh opportunities.
                        </p>
                    </div>
                </article>

            </section>
        </main>

    )
}

export default Content