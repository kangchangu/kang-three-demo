import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from 'three'

const EventMesh = (props: JSX.IntrinsicElements['mesh']) => {
    const mesh = useRef<THREE.Mesh>(null!)

    const [hovered , setHovered] = useState(false);
    const [active , setActive] = useState(false);

    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    return(
        
        <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHovered(true)}
        onPointerOut={(event) => setHovered(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
       
        </mesh>
        
    )
}

export default EventMesh;