import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";


const AddTaskModal = ({isOpen,setIsOpen}) => {

    const {register,reset,handleSubmit} = useForm();

    const oncancel=()=>{
        reset();
        setIsOpen(false)
   }

    const onSubmit =(data)=>{
          console.log(data);
          oncancel();
    }
   

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="programming lerner">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3">
                <label htmlFor="title">Title</label>
                <input className="w-full rounded-md" type="text" id="title" {...register('name')} />
                </div>
                <div className="flex flex-col gap-3">
                <label htmlFor="title">description</label>
                <textarea className="w-full rounded-md" type="text" id="description" {...register('description')} />
                </div>
                <div className="flex flex-col gap-3">
                <label htmlFor="title">DateLine</label>
                <input className="w-full rounded-md" type="date" id="date" {...register('date')} />
                </div>
                <div className="flex flex-col gap-3">
                <label htmlFor="title">Assign To</label>
                 <select className="w-full rounded-md" {...register('assign')} id="assign">
                     <option value="masud">masud</option>
                     <option value="saki">saki</option>
                     <option value="ashiq">ashiq</option>
                     <option value="sakib">sakib</option>
                     <option value="rakib">rakib</option>
                     <option value="rimon">rimon</option>
                     <option value="saiful">saiful</option>
                 </select>
                </div>
                <div className="flex flex-col gap-3">
                <label htmlFor="title">Priority</label>
                 <select className="w-full rounded-md" {...register('priority')} id="priority">
                    <option defaultValue value="high">high</option>
                    
                     <option value="medium">medium</option>
                     <option value="low">low</option>
                   
                 </select>
                </div>
                <div className="flex gap-3 justify-end">
                <button className="btn btn-primary" type="submit">submit</button>
                <button onClick={()=>oncancel()} className="btn btn-danger" type="button">cancel</button>
                </div>
              
             
            </form>
        
      </Modal>
    );
};

export default AddTaskModal;