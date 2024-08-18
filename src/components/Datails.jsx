import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Breadcrumbs } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import Detailedpage from './Detailedpage';

function Details() {
    const { slug } = useParams();
    const [propertyId, setPropertyId] = useState(null);
    const [detailApi, setDetailApi] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fetch the property ID based on the slug
    useEffect(() => {
        const fetchId = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/properties?filters[slug][$eq]=${slug}`);
                const id = res.data.data[0]?.id;
                setPropertyId(id);
            } catch (error) {
                console.error("Error fetching property ID:", error);
            }
        };

        fetchId();
    }, [slug]);

    // Fetch the detailed property information using the ID
    useEffect(() => {
        if (propertyId) {
            const fetchDetails = async () => {
                try {
                    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/properties/${propertyId}?populate=deep`);
                    setDetailApi(res.data.data);
                } catch (error) {
                    console.error("Error fetching property details:", error);
                }
            };

            fetchDetails();
        }
    }, [propertyId]);

    return (
        <>
            <section className='details-bg'>
                <div className='container '>
                    <div className="row">
                        <div className="col breadcrumb_align ">
                            <Breadcrumbs aria-label="breadcrumb " className='pt-5 details-Div'>
                                <Link to="/" underline="hover" color="#949494" className='breadcrum_txt'>
                                    Home
                                </Link>
                                <Link to="/properties" underline="hover" color="#949494" className='breadcrum_txt'>
                                    Property Listings
                                </Link>
                                <Typography color="#000000" className='breadcrum_txt02'> {detailApi?.attributes?.title}</Typography>
                            </Breadcrumbs>
                        </div>
                    </div>
                    <Detailedpage detailApi={detailApi} />
                </div>
            </section >
        </>
    );
}

export default Details;
