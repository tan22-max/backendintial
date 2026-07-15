import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePaths) return null
        // uplaod the file on cloudinary
        const response = cloudinary.uploader.upload(localFilePath ,{
            resource_type :"auto"
        })
        // file is uplaoded 
        console.log("file is uploaded successfully" , response.url);
        return response;
        
    } catch (error) {
        fs.unlink(localFilePath) // removes locallly saved temperray files
        return null;
    }
}


    

export {uploadOnCloudinary} ;
