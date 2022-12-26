import React from 'react';


function Sort( value: number) {
const [Visable, setVisable] = React.useState(false);
const [selected, setSelected] = React.useState(0);
const list = ['popularity', 'price', 'available'];


const sortName = list[selected];

const onClickListItem = (i: number) => (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setSelected(i);
    setVisable(false)
};

    return(
        <div className="sort-container">
            
            
              <b>sort on:  </b>  
              <span >{sortName}</span>
        {Visable && (
                <div className="sort-pop-up active" >
                    <ul>
                     {list.map((name, i) => (
                        <li key={i} 
                        value={name}
                        className={value === i ?'active' : ''}
                        onClick={onClickListItem(i)}
                        >
                            {name}
                        </li>
                     ))}
                     
                    </ul>
                </div> 
            )
        }
           
        </div>
    )
}


export default Sort;