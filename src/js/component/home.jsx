import React, {useState} from "react";

//create your first component
const Home = () => {

    let [listaDeTareas, setListaDeTareas] = useState(["Get a Shower", "Clean", "Learn some React", "Learn some German"])

	const  [nuevaTarea, setNuevaTarea] = useState([""])

	return (
		<div className="container mt-5">
			<h1 className="text-center mt-5">Todos</h1>
			<div className="mx-auto col-6">
				<input placeholder="What needs to be done?" type="text" className="form-control" 
				value={nuevaTarea}onChange={(evento)=> {
					setNuevaTarea(evento.target.value)
				}}
				onKeyUp={(evento)=>{
					if (evento.key == "Enter"){
						setListaDeTareas([...listaDeTareas, nuevaTarea])
						setNuevaTarea("")
					}
					console.log(evento.key)
				}}
				/>
			    <ul>
					{listaDeTareas.map((item,index) => {
						return(
                           <li key={index}>  {item}<i onClick={()=>{
							const aux = listaDeTareas.filter((task, ind) => {
								return (ind != index)
							})
							setListaDeTareas(aux)
						   }} className="iconoOculto fa-solid fa-xmark"></i></li>
						)
						})} 
					
				</ul>
				<span>
					{listaDeTareas.length} Items left
				</span>
		    </div>

		</div>
	);
};

export default Home;
