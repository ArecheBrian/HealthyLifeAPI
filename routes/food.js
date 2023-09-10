var express = require('express');
var router = express.Router();

let foods = [
      {
        "id": 1,
        "nombre": "Manzana",
        "calorias": 52,
        "macros": {
          "proteinas": 0.25,
          "carbohidratos": 14,
          "grasas": 0.3
        }
      },
      {
        "id": 2,
        "nombre": "Pollo a la parrilla",
        "calorias": 165,
        "macros": {
          "proteinas": 31,
          "carbohidratos": 0,
          "grasas": 3.6
        }
      },
      {
        "id": 3,
        "nombre": "Arroz integral",
        "calorias": 216,
        "macros": {
          "proteinas": 4.5,
          "carbohidratos": 45,
          "grasas": 1.6
        }
      },
      {
        "id": 4,
        "nombre": "Salmón",
        "calorias": 206,
        "macros": {
          "proteinas": 22,
          "carbohidratos": 0,
          "grasas": 13
        }
      },
      {
        "id": 5,
        "nombre": "Huevo",
        "calorias": 68,
        "macros": {
          "proteinas": 5.5,
          "carbohidratos": 0.6,
          "grasas": 4.8
        }
      },
      {
        "id": 6,
        "nombre": "Brócoli",
        "calorias": 55,
        "macros": {
          "proteinas": 3.7,
          "carbohidratos": 11.2,
          "grasas": 0.6
        }
      },
      {
        "id": 7,
        "nombre": "Avena",
        "calorias": 71,
        "macros": {
          "proteinas": 2.5,
          "carbohidratos": 12,
          "grasas": 1.4
        }
      },
      {
        "id": 8,
        "nombre": "Plátano",
        "calorias": 105,
        "macros": {
          "proteinas": 1.3,
          "carbohidratos": 27,
          "grasas": 0.4
        }
      },
      {
        "id": 9,
        "nombre": "Almendras",
        "calorias": 7,
        "macros": {
          "proteinas": 6,
          "carbohidratos": 2,
          "grasas": 14
        }
      },
      {
        "id": 10,
        "nombre": "Yogur griego",
        "calorias": 130,
        "macros": {
          "proteinas": 10,
          "carbohidratos": 4,
          "grasas": 8
        }
      }
]
/* GET food data. */
router.get('/', function(req, res, next) {
  res.send(foods);
});

/* GET food data con id */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const food = foods.find(item => item.id == id);

  if(!food) {
    return res.sendStatus(404)
  }

  res.send(food);
});

// POST 
router.post('/', function(req, res, next){
  const food = req.body;
  foods.push(food);
  res.status(201);
  res.send(food);
})


module.exports = router;
