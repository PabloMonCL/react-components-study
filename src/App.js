import React from "react";
import "./App.css";

// Componentes
import PropsExampleFunc from "./components/PropsExampleFunc";
import PropsExampleClass from "./components/PropsExampleClass";
import StateExampleClass from "./components/StateExampleClass";
import CambioEstado from "./components/CambioEstado";
import Parent from "./components/metodoscomoprops/Parent";
import ConditionalRender from "./components/ConditionalRender";
import ListaPersonas from "./components/listasyllaves/ListaPersonas";
import Formulario from "./components/Formulario";
import FragmentExmp from "./components/FragmentsExmp";
import RefsExmp from "./components/RefsExmp";
import HoverCounter from "./components/HOC/HoverCounter";
import HookUseStateExpm from "./components/Hookexmp/HookUseStateExpm";
import UseStateExpm2 from "./components/Hookexmp/UseStateExpm2";
import UseStateExmp3 from "./components/Hookexmp/UseStateExmp3";
import UseStateExmp4 from "./components/Hookexmp/UseStateExmp4";
import UseEffectExmp1 from "./components/Hookexmp/UseEffectExmp1";
import UseEffectExmp2 from "./components/Hookexmp/UseEffectExmp2";
import UseEffectExmp3 from "./components/Hookexmp/UseEffectExmp3";

function App() {
  return (
    <div className='myclass'>
      <PropsExampleFunc nombre='Pablo' />
      <PropsExampleClass nombre='Esteban' />
      <StateExampleClass />
      <CambioEstado />
      <Parent />
      <ConditionalRender />
      <ListaPersonas />
      <Formulario />
      <FragmentExmp />
      <RefsExmp />
      <HoverCounter name='pablo' />
      <HookUseStateExpm />
      <UseStateExpm2 />
      <UseStateExmp3 />
      <UseStateExmp4 />
      <UseEffectExmp1 />
      <UseEffectExmp2 />
      <UseEffectExmp3 />
    </div>
  );
}

export default App;
