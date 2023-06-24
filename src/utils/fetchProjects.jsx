import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
    space: '95ur27e2dlfg',
    environment: 'master',
    accessToken: 'OTAyJdOghvkzlgWiIPLakNV5h18bssV3RfoS0zxs2mc',
});
//title, url, id, img
export const useFetchProjects = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]); 

    const getData = async() => {
        try {
            const response = await client.getEntries({content_type: 'projects'});
           
            const projectData = response.items.map((item)=>{
                const {title, url, image} = item.fields;
                const {id} = item.sys;
                const img = image?.fields?.file?.url;
                
                return {title,url, id, img}
            })
            
            setProjects(projectData);
            setIsLoading(false);
            
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    return {isLoading, projects};
}

