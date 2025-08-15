import React, { useEffect, useRef, useMemo } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
    const group = useRef();

    // Load GLB model
    const { scene } = useGLTF('/models/animations/developer.glb');
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone);

    // Load FBX animations
    const idleFBX = useFBX('/models/animations/idle.fbx');
    const saluteFBX = useFBX('/models/animations/salute.fbx');
    const clappingFBX = useFBX('/models/animations/clapping.fbx');
    const victoryFBX = useFBX('/models/animations/victory.fbx');

    // Rename animations for easy reference
    idleFBX.animations[0].name = 'idle';
    saluteFBX.animations[0].name = 'salute';
    clappingFBX.animations[0].name = 'clapping';
    victoryFBX.animations[0].name = 'victory';

    // Combine animations into one array
    const allAnimations = [
        idleFBX.animations[0],
        saluteFBX.animations[0],
        clappingFBX.animations[0],
        victoryFBX.animations[0]
    ];

    // Bind animations to the GLB model's skeleton
    const { actions } = useAnimations(allAnimations, group);

    useEffect(() => {
        if (actions[animationName]) {
            actions[animationName].reset().fadeIn(0.5).play();
        }
        return () => {
            if (actions[animationName]) {
                actions[animationName].fadeOut(0.5);
            }
        };
    }, [animationName, actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={nodes.Hips} />
            <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
            <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
            <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
            <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
            <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
            <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
            <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
            <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
        </group>
    );
};

useGLTF.preload('/models/animations/developer.glb');
useFBX.preload('/models/animations/idle.fbx');
useFBX.preload('/models/animations/salute.fbx');
useFBX.preload('/models/animations/clapping.fbx');
useFBX.preload('/models/animations/victory.fbx');

export default Developer;
