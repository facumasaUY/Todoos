import React, {useState} from "react";

//create your first component
const Home = () => {

    let [listaDeTareas, setListaDeTareas] = useState(["Get a Shower", "Clean", "Learn some React", "Learn some German"])

	const  [nuevaTarea, setNuevaTarea] = useState([""])

	return (
		<div className="container mt-5">
			<h1 className="title text-center mt-5">Todos</h1>
			<div className="mx-auto col-6">
				<input placeholder="What needs to be done?" type="text" className="input form-control rounded-0" 
				value={nuevaTarea}onChange={(evento)=> {
					setNuevaTarea(evento.target.value)
				}}
				onKeyUp={(evento)=>{
					if (evento.key == "Enter" && nuevaTarea.trim() !== ""){
						setListaDeTareas([...listaDeTareas, nuevaTarea])
						setNuevaTarea("")
					}
					console.log(evento.key)
				}}
				/>
			    <ul className="m-0 p-0">
					{listaDeTareas.map((item,index) => {
						return(
                           <li className="lista border-bottom border-start border-end d-flex justify-content-between" key={index}>  <span className="xButton">{item}</span><i className="" onClick={()=>{
							const aux = listaDeTareas.filter((task, ind) => {
								return (ind != index)
							})
							setListaDeTareas(aux)
						   }} className="iconoOculto fa-solid fa-xmark"></i></li>
						)
						})} 
					
				</ul>
				<div className="bottomDiv border-bottom border-start border-end text-muted">
				<span className="spanBottom">
					{listaDeTareas.length > 0 ? `${listaDeTareas.length} Items left` : "No more tasks. Add a new task"}
				</span>
				</div>
				<div className="mx-2 py-1 border-bottom border-start border-end"></div>
				<div className="mx-3 py-1 border-bottom border-start border-end"></div>
		    </div>

		</div>
	);
};

export default Home;
