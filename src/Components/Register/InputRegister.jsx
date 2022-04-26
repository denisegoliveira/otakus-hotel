import React from "react";
import { Button, 
        FormLabel, 
        Input, 
        Text 
    } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import "./InputRegister.css"


function InputRegister() {
    const schema = yup.object().shape({
        nome: yup.string().required(),
        data: yup.date().default(() => (new Date())).required(),
        email: yup.string().email("Insira um email valido").required("Este campo é obrigatorio"),
        senha: yup.string().required("Este campo é obrigatorio")
      })
    
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const addPost = value => console.log(value);

    return (
        <>
            <div id="div-formulario-register" onSubmit={handleSubmit(addPost)}>
                <form id="input-register">
                    
                    <FormLabel>Nome e Sobrenome</FormLabel>
                    <Input 
                    bg="#c4c4c4" 
                    w={[230, 350, 350, 270, 330]} 
                    h={[50]}  
                    mb="1" 
                    type="text"  
                    name="nome" {...register("nome")}
                    />
                    <Text color="white" fontSize={15}>
                        {errors.nome?.message}
                    </Text>
                    
                    <FormLabel>Data de nascimento</FormLabel>
                    <Input 
                    bg="#c4c4c4" 
                    w={[230, 350, 350, 270, 330]} 
                    h={[50]} 
                    mb="1" 
                    type="date" 
                    name="data" {...register("data")}
                    />
                    <Text color="white" fontSize={15}>
                        {errors.data?.message}
                    </Text>

                    <FormLabel>Email</FormLabel>
                    <Input 
                    bg="#c4c4c4" 
                    w={[230, 350, 350, 270, 330]} 
                    h={[50]} 
                    mb="1" 
                    type="email"  
                    name="email" {...register("email")}
                    />
                    <Text color="white" fontSize={15}>
                        {errors.email?.message}
                    </Text>

                    <FormLabel>Senha</FormLabel>
                    <Input 
                    bg="#c4c4c4"
                    w={[230, 350, 350, 270, 330]} 
                    h={[50]}  
                    mb="1" 
                    type="password"  
                    name="senha" {...register("senha")}
                    />
                    <Text color="white" fontSize={15}>
                        {errors.senha?.message}
                    </Text><br/>

                    <Button 
                    type="submit" 
                    w={[230, 350, 350, 270, 330]} 
                    h={[50]} 
                    top="1" border="1" borderColor="white"
                    >Cadastrar
                    </Button>
                </form>
            </div>
        </>
    )
}

export default InputRegister;
