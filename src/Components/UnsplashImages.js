import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const UnsplashImages = ({ url }) => {
    const [images, setImage] = useState([]);

    const url_1 = url;
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    const fetchImages = (url_1) => {
        axios
            .get(url + `?client_id=${accessKey}`)
            .then(res => {
                setImage([...images, ...res.data])

            });
    }


    const WrapperImages = styled.section`
          max-width: 70rem;
          margin: 4rem auto;
          display: grid;
          grid-gap: 1em;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-auto-rows: 300px;
        `;

    return (
        <div className="container" >

            <button onClick={() => { fetchImages() }}>Show Images</button>
            <WrapperImages>
                {images.map((dt) => {
                    return (
                        <img className="item" key={dt.id} src={dt.urls.regular} alt="" />
                    )
                }
                )}
            </WrapperImages>

        </div>
    );

}

export default UnsplashImages;





