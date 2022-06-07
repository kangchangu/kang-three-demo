import { Canvas } from "@react-three/fiber";
import EventMesh from "../component/EventMesh";

const EventMeshSampePage = () => {

    return(
        <Canvas>
            <ambientLight />
            <pointLight position={[10 , 10 , 10]} />
            <EventMesh position={[-1.2 , 0 , 0]} />
            
        </Canvas>
    )

}

export default EventMeshSampePage;