import React, { useLayoutEffect, useState } from "react"
import { useAppSelector } from "../app/hooks"
import CCNActionButton from "../components/button/CCNActionButton"
import { getAnswearId } from "../features/answearSlice"
import Questionnaire from '../static/data/questionnaire.json'

import dummy      from "../assets/img/dummy.jpg"
import adventura  from "../assets/img/adventura.png"
import newNomad   from "../assets/img/newNomad.png"
import yelos      from "../assets/img/yelos.png"
import zelos      from "../assets/img/zelos.png"
import newzyra    from "../assets/img/newzyra.png"
import newway     from "../assets/img/newway.png"


function CCNResultView() {
  const [result, setResult]                   = useState({ name: "-", voucher: "-" })
  const arrHelmImage                          = [dummy, adventura, newNomad, yelos, zelos, newzyra, newway]
  const [helmImageResult, setHelmImageResult] = useState(dummy)
  const answearId                             = useAppSelector(getAnswearId)


  useLayoutEffect(() => {
    const resultIndex = Questionnaire.listOfResult.findIndex(item => item.id === answearId)
    if(resultIndex !== -1) {
      const result = {
        ...Questionnaire.listOfResult[resultIndex]
      }
      setResult(result)
      getImage(Questionnaire.listOfResult[resultIndex].name)
    }
  }, [])

  const getImage = (value: string) => {
    const resultHelm = value.toLocaleLowerCase()

    for (let index = 0; index < arrHelmImage.length; index++) {
      const helm = arrHelmImage[index].toLowerCase()
      if(helm.includes(resultHelm))
        setHelmImageResult(arrHelmImage[index])
    }
  }


  return (
    <div className="resultContainer">
      <div className="resultContentContainer">
        <div className="resultContent">
          <p className="txtResultTitle">Your helmet are...</p>
          <p className="txtResultHelm">{result.name}</p>
          <p className="txtResultDesc mt-[25px]">Claim your <b>50% discount</b> with this promo code</p>
          <CCNActionButton
            className="mt-[20px] mr-[25px] !w-[175px]"
            a_strText={result.voucher}
            filled
            copyText
          />
        </div>
        <div className="resultPicture">
          <img src={helmImageResult} alt="helmet" />
        </div>
      </div>
    </div>
  )
}

export default CCNResultView
