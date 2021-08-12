const express = require('express');

const Sity = require('../bd/sityShema')
const router = express.Router()

router
.route('/')
.get (async (req,res) => {
  const allSitys = await Sity.find()
  res.status(200).json(allSitys)
})


.post( async (req,res) => {
  const {objSity} = req.body
 
  if (objSity) {
    const arr = await Sity.find()
    const newSity= await Sity.create({
      name:req.body.objSity.name,
      country: req.body.objSity.sys.country,
      temp: req.body.objSity.main.temp,
      temp_max: req.body.objSity.main.temp_max,
      temp_min: req.body.objSity.main.temp_min,
      speed:req.body.objSity.wind.speed,
      visibility:req.body.objSity.visibility,
      icon:req.body.objSity.weather[0].icon,
      order:arr.length ? arr.length + 1 : 1
    })
    res.status(200).json(newSity)
  } else {
    res.status(400).json({createSity:false})
  }
})

.delete( async (req,res) => {
  const {id} = req.body
  
  if (id) {
    const delSity = await Sity.findOneAndDelete({ _id: id })
    res.status(200).json(id)
  } else {
    res.status(400).json({createSity:false})
  }
})

.put( async (req,res) => {
  const {card1Id,
    order1, card2Id, order2} = req.body      
    const oneSity = await Sity.findById(card1Id)
    oneSity.order = order2
    await oneSity.save()
    const twoSity = await Sity.findById(card2Id)
    twoSity.order = order1
    await twoSity.save()
if(oneSity && twoSity){
    res.status(200).json(true)
  } else {
    res.status(400).json({createSity:false})
  }
})

module.exports = router
