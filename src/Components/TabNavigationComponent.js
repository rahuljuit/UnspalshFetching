import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import UnsplashImages from './UnsplashImages';

function TabNavigation() {
    const [key, setKey] = useState();
    const [items, setItem] = useState([]);
    useEffect(() => {
        fetchImages();
    }, [])

    const fetchImages = () => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = process.env.REACT_APP_ACCESSKEY;

        axios
            .get(`${apiRoot}/collections?client_id=${accessKey}&orientaion=squarish`)
            .then(res => {
                setItem([...items, ...res.data]);
            })
    }

    const newItems = items.slice(1, 4);
    return (
        newItems.map((item) => {
            return <Tabs activeKey={item.title}
                onSelect={(k) => setKey(k)}
                id="controlled-tab-example">
                <Tab eventKey={item.title} title={item.title}>
                    <UnsplashImages url={item.links.photos} />
                </Tab>
            </Tabs>
        })
    );
}

export default TabNavigation;


