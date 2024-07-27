import React, { useState } from 'react'
import CONFIG from '../../static/config.json'
import Tooltip from '@mui/material/Tooltip'


interface _IActionButtonProps {
  className         ?: string,
  a_strText         : string,
  filled            ?: boolean,
  copyText          ?: boolean
  a_strValue        ?: string,
  onClickCallback   ?: (event: any) => void
}

function CCNActionButton({ className, a_strText, filled, copyText, onClickCallback = ()=>{}, a_strValue = "" }: _IActionButtonProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [tooltipText, setTooltipText] = useState("")

  const handleOpenTooltip = () => {
    try {
      navigator.clipboard.writeText(a_strText)
      setTooltipText("Copied to Clipboard!")
    } catch (error) {
      setTooltipText("Can't Copy. Protocol is not Secured!")
    }
    setTooltipOpen(true)
    setTimeout(() => {
      setTooltipOpen(false)
    }, CONFIG.tooltip_timeout_ms)
  }


  return (
    <Tooltip
      title       = {tooltipText}
      open        = {tooltipOpen}
      PopperProps = {{
        disablePortal: true,
      }}
      arrow
      disableFocusListener
      disableHoverListener
      disableTouchListener
    >
      <button className={
        `btnActionContainer px-[10px]
        ${filled ? "btnActionFilled" : ""} 
        ${className}`}
        onClick={copyText ? handleOpenTooltip : () => onClickCallback(a_strValue)}
      >
        <p className='btnActionText'>{a_strText}</p>
      </button>
    </Tooltip>
  )
}

export default CCNActionButton
