"use client"

import {
    BlockNoteEditor,
    PartialBlock
} from "@blocknote/core"
import * as react from "@blocknote/react"
import "@blocknote/core/style.css"
// import { useTheme } from "next-themes"

// import { useEdgeStore } from "@/lib/edgestore"

interface EditorProps{
  onChange:(value:string) => void
  initialContent?:string
  editable?:boolean
}

export const Editor = ({
    onChange,
    initialContent,
    editable
}:EditorProps) => {
    return (
        <div>
            hello..
        </div>
    )
}
