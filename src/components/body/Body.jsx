import './body.css'
import images from '../../image.js'
import { useState } from 'react'

const data = [
    { id: 0, img: images.img0 },
    { id: 1, img: images.img1 },
    { id: 2, img: images.img2 },
    { id: 3, img: images.img3 },
    { id: 4, img: images.img4 },
    { id: 5, img: images.img5 },
]

const Body = () => {
    const [imgId, setImgId] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (i) => {
        setImgId(i);
        setOpen(true);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const handleClick = (n) => {
        let newSildeNumber;
        if (n === 'l') {
            newSildeNumber = imgId === 0 ? data.length - 1 : imgId - 1
        }
        else {
            newSildeNumber = imgId === data.length - 1 ? 0 : imgId + 1
        }
        setImgId(newSildeNumber)
    }

    return (
        <div className="app_wrapper">
            {open &&
                <div className='slider'>
                    <div className="close">
                        <img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" alt="close" onClick={() =>setOpen(false)} />
                    </div>
                    <div className="arrowLeft">
                        <img src="https://img.icons8.com/ios/50/000000/circled-chevron-left.png" alt="left" onClick={() => handleClick('l')} />
                    </div>
                    <div className="imgSlider">
                        <img src={data[imgId].img} alt="" />
                    </div>
                    <div className="arrowRight">
                        <img src="https://img.icons8.com/ios/50/000000/circled-chevron-right.png" alt="left" onClick={() => handleClick('r')} />
                    </div>
                </div>
            }

            <div className='body_container'>
                {data.map((dat, i) => (
                    <div className="body_image" key={dat.id}>
                        <img src={dat.img} alt="" onClick={() => handleOpen(i)} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Body