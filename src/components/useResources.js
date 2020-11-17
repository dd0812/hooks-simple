import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources , setResources] = useState([]);

    // const fetchResource = async (resource) => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`); 

    //     // this.setState({resources : response.data});
    //     setResources(response.data);
    // }

    // async componentDidUpdate(prevProps){
    //     if(prevProps.resource !== this.props.resource){
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    //         this.setState({resources : response.data});
    //     }
    // }

    //useEffect hook = componentDidMount + componentDidUpdate LC methods
    useEffect(
        ()=> {
        //instead of fetchResource(resource);
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`); 

            // this.setState({resources : response.data});
            setResources(response.data);
        })(resource);
     }, 
     [resource]
    );
    return resources;
}

export default useResources;