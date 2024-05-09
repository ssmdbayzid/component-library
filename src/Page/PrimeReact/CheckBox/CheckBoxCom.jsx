import React, {useState} from 'react'
import { Checkbox } from "primereact/checkbox";

const CheckBoxCom = () => {
  return (
    <div className='grid grid-cols-4'>      
      <div className="">
        <h2 className='mb-2 font-semibold'>Check Box</h2>
        <Basic />
        </div>
      <div className="col-span-2">
        <h2 className='mb-2 font-semibold'>Multiple Check Box</h2>
        <GroupCheckBox />
        </div>
      <div className="">
        <h2 className='mb-2 font-semibold'>Dynamic Check Box</h2>
        <Dynametics />
        </div>
    </div>
  )
}

export default CheckBoxCom

const Basic = ()=>{
  const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}

const GroupCheckBox = ()=>{
  const [ingredients, setIngredients] = useState([]);

  const onIngredientsChange = e =>{
    let _ingredients = [...ingredients];
    if(e.checked){
      _ingredients.push(e.value)
    }else{
      _ingredients.splice(_ingredients.indexOf(e.value), 1)      
    }
    setIngredients(_ingredients)
  }
    return (
      <div className="card flex flex-wrap justify-content-center gap-3">
      <div className="flex align-items-center">
          <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
          <label htmlFor="ingredient1" className="ml-2">Cheese</label>
      </div>
      <div className="flex align-items-center">
          <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
          <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
      </div>
      <div className="flex align-items-center">
          <Checkbox inputId="ingredient3" name="pizza" value="Pepper" onChange={onIngredientsChange} checked={ingredients.includes('Pepper')} />
          <label htmlFor="ingredient3" className="ml-2">Pepper</label>
      </div>
      <div className="flex align-items-center">
          <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />
          <label htmlFor="ingredient4" className="ml-2">Onion</label>
      </div>
  </div>
    )
}

const Dynametics = () =>{
  const categories = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
];
const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

  const onCategoryChange = (e)=>{
    let _selectedCategory = [...selectedCategories];

    if(e.checked){
      _selectedCategory.push(e.value)
    }else{
      _selectedCategory =  _selectedCategory.filter(category=>category.key !=e.value.key);
    }
    setSelectedCategories(_selectedCategory)
  }


 return (
  <div className="card flex justify-center">
  <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
          return (
              <div key={category.key} className="flex items-center">
                  <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                  <label htmlFor={category.key} className="ml-2">
                      {category.name}
                  </label>
              </div>
          );
      })}
  </div>
</div>
 )
}