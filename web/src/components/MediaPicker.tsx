'use client'

import { ChangeEvent, useState } from "react"

export function MediaPicker(){
    const [preview, setpreview] = useState< string | null >(null)

    function onFileSelected(event: ChangeEvent<HTMLInputElement>){
        
        const { files } = event.target

        if(!files) return

        const previewUrl = URL.createObjectURL(files[0])

        setpreview(previewUrl)


    }
    return (
        <>
        <input 
        onChange={onFileSelected}
        name="coverUrl"
        type="file" 
        id="midia" 
        accept="image/*"
        className="hidden" />
        {preview && 
        <img 
        src={preview} 
        alt="" 
        className="w-full aspect-video rounded-lg onject-cover " 
        />}

        </>
    )

}