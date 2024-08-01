export const getJobApplication = () => {
    const storedJobApplication = localStorage.getItem("job-application");
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    else{
        return [];
    }
}
const storedJobApplication = getJobApplication();

const saveJobApplication = (key, saveItem) =>{
    localStorage.setItem(key, JSON.stringify(saveItem));
}

export const searchJobId = (searchJobId) => {
    return storedJobApplication.find(jobId => searchJobId === jobId);
}

export const addJobApplication = (id) => {
    if(!searchJobId(id)){
        storedJobApplication.push(id);
        saveJobApplication("job-application", storedJobApplication);
    }
}

export default {getJobApplication, addJobApplication};