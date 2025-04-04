import { Typography } from "@mui/material";
import { DashboardContent } from "src/layouts/dashboard";
import CameraModal from "../CameraModal";
import React, { useState } from "react";
import { Button } from "grommet";
import { Gallery, FormClose } from "grommet-icons";
import Camera from "../Camera";

export function ScannerView() {

    const [dataUri, setDataUri] = useState('');

    const handleTakePhoto = async (dataUri) => {
        if (dataUri) {
            console.log(dataUri)
        }
      };
  
    const isFullscreen = false;
    return (
        <DashboardContent>
            <Typography variant="h4" sx={{ mb: 5 }}>
                Scanner
            </Typography>
            <div>
       <Camera onTakePhoto={handleTakePhoto} />
    </div>
        </DashboardContent>
    )
}