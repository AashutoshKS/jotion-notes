'use client'	

import {BlockNoteEditor,PartialBlock} from '@blocknote/core'
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import '@blocknote/core/style.css'
import { useTheme } from "next-themes"

import { useEdgeStore } from "@/lib/edgestore"

interface EditorProps{
  onChange:(value:string) => void
  initialContent?:string
  editable?:boolean
}

function Editor ({onChange,initialContent,editable = true}:EditorProps) {

  const {resolvedTheme} = useTheme()
  const {edgestore} = useEdgeStore()

  const handleUpload = async (file:File) => {
    const response = await edgestore.publicFiles.upload({file})

    return response.url
  }

  const parsedContent = initialContent
    ? (JSON.parse(initialContent) as PartialBlock[])
    : undefined;

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: parsedContent,
    uploadFile: handleUpload,
  });

return (
    <div>
        <BlockNoteView
        editor={editor}
        editable={editable}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={() => {
          const current = editor.document;
          onChange(JSON.stringify(current, null, 2));
        }}
      />
    </div>
  )
}

export default Editor