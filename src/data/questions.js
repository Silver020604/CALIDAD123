const questions = [
  {
id: 1,
es: "Verifique que el sellado estructural entre paneles sea continuo y no faltante.",
en: "Verify that the structural adhesive seal between panels is continuous and not missing."
},
{
id: 2,
es: "Verifique que el RTV utilizado en el sellado de componentes eléctricos sea únicamente de color blanco.",
en: "Verify that the RTV used to seal electrical components is only WHITE."
},
{
id: 3,
es: "Verifique que el RTV aplicado no presente poros ni faltantes.",
en: "Verify that the RTV applied has no porosity or missing material."
},
{
id: 4,
es: "Verifique que no haga falta la tornillería ni se encuentre dañada en toda la zona C del Galley.",
en: "Verify that there are no missing or damaged screws in the entire C area of the Galley."
},
{
id: 5,
es: "Verifique que en la tornillería con tuerca la rosca sobresalga mínimo 0.031 pulgadas después de la tuerca.",
en: "Verify that in screws with nuts, the thread protrudes at least 0.031 inches beyond the nut."
},
{
id: 6,
es: "Verifique que las mangueras anaranjadas de los ductos de aire no se encuentren dañadas.",
en: "Verify that the orange air duct hoses are not damaged."
},
{
id: 7,
es: "Verifique que todos los orificios donde hay uniones de cables y mangueras estén rellenos con RTV blanco.",
en: "Verify that all holes where cable and hose connections exist are filled with white RTV."
},
{
id: 8,
es: "Verifique que los clamps no se encuentren flojos.",
en: "Verify that the clamps are not loose."
},
{
id: 9,
es: "Verifique que en los bordes y uniones de los paneles no haga falta goma estructural.",
en: "Verify that no structural rubber is missing from panel edges and joints."
},
{
id: 10,
es: "Verifique que los remaches no tengan un gap mayor a 0.010 pulgadas.",
en: "Verify that rivets do not have a gap greater than 0.010 inches."
},
{
id: 11,
es: "Verifique que los insertos expuestos no presenten FOD y estén correctamente engomados.",
en: "Verify that exposed inserts are free of FOD and properly secured."
},
{
id: 12,
es: "Verifique que no exista FOD en el mueble.",
en: "Verify that there is no FOD on the unit."
},
{
id: 13,
es: "Verifique la aplicación de Nycote en las tierras.",
en: "Verify the application of Nycote on the grounds."
},
{
id: 14,
es: "Verifique que no existan daños estructurales en los paneles.",
en: "Verify that there are no structural damages in the panels."
},
{
id: 15,
es: "Verifique que el edgefill en las orillas de los paneles no tenga poros ni faltante de material.",
en: "Verify that the edgefill on panel edges has no porosity or missing material."
},
{
id: 16,
es: "Verifique que las etiquetas de tierras y conectores correspondan al ensamble eléctrico.",
en: "Verify that ground and connector labels correspond to the electrical assembly."
},
{
id: 17,
es: "Verifique que todos los fittings tengan instalado el bushing requerido.",
en: "Verify that all fittings have the required bushing installed."
},
{
id: 18,
es: "Verifique que los tie mounts tengan squeeze out consistente y sin faltantes.",
en: "Verify that tie mounts have consistent squeeze-out and no missing sealant."
},
{
id: 19,
es: "Verifique que los ductos de ventilación no se encuentren dañados.",
en: "Verify that ventilation ducts are not damaged."
},
{
id: 20,
es: "Verifique que las etiquetas de identificación de los arneses eléctricos sean legibles y no estén flojas.",
en: "Verify that electrical harness identification labels are legible and not loose."
},
{
id: 21,
es: "Verifique que las etiquetas de identificación eléctrica sean legibles y no estén dañadas.",
en: "Verify that electrical identification labels are legible and not damaged."
},
{
id: 22,
es: "Verifique que los arneses no se encuentren dañados en toda su extensión.",
en: "Verify that harnesses are not damaged throughout their entire length."
},
{
id: 23,
es: "Verifique que los componentes metálicos no estén rayados o cuenten con Alodine si aplica.",
en: "Verify that metallic components are not scratched or are treated with Alodine if required."
},
{
id: 24,
es: "Verifique que la tornillería a 6 pulgadas del piso tenga RTV gris.",
en: "Verify that screws within 6 inches of the floor have gray RTV."
},
{
id: 25,
es: "Verifique que los arneses tengan mínimo dos vueltas de tape gris en los clamps.",
en: "Verify that harnesses have at least two wraps of gray tape at clamp attachment points."
},
{
id: 26,
es: "Verifique que la tornillería de floor fittings y placas tenga torque de 25 lb/in.",
en: "Verify that floor fitting and placard screws meet the 25 lb/in torque requirement."
},
{
id: 27,
es: "Verifique que no existan rayones superficiales en los trims.",
en: "Verify that there are no surface scratches on trims."
},
{
id: 28,
es: "Verifique que no existan rayones en trims y bisagras dentro de cajones.",
en: "Verify that trims and hinges inside compartments are free of scratches."
},
{
id: 29,
es: "Verifique que no existan daños o rayones en los trims por la parte inferior.",
en: "Verify that trims are free of damage or scratches from below."
},
{
id: 30,
es: "Verifique que las rejillas de ventilación no presenten daños o rayones.",
en: "Verify that ventilation grills are free of damage or scratches."
},
{
id: 31,
es: "Verifique que no existan daños en los trims visibles al abrir puertas.",
en: "Verify that there is no damage on trims visible when doors are opened."
},
{
id: 32,
es: "Verifique que la charola metálica no presente daños alrededor de los orificios.",
en: "Verify that the metallic tray has no damage around the holes."
},
{
id: 33,
es: "Verifique que no existan daños en la pintura de la cubierta de la lámpara.",
en: "Verify that the worklight cover paint is not damaged."
},
{
id: 34,
es: "Verifique que no haya daños en paneles dentro de cajones cerca de los trims.",
en: "Verify that panels inside compartments near trims are not damaged."
},
{
id: 35,
es: "Verifique que en el interior de las puertas no existan daños en los bordes.",
en: "Verify that there is no damage on door interior edges."
},
{
id: 36,
es: "Verifique que la etiqueta de la caja eléctrica no esté dañada ni doblada.",
en: "Verify the electrical panel label is not damaged or folded."
},
{
id: 37,
es: "Verifique que la etiqueta de la caja eléctrica no esté dañada ni arrugada cerca de botones y luces.",
en: "Verify the electrical panel placard is not damaged or wrinkled near buttons and lights."
},
{
id: 38,
es: "Verifique que las etiquetas de hornos y compartimentos estén íntegras.",
en: "Verify that oven and compartment labels are not damaged or disbonded."
},
{
id: 39,
es: "Verifique que las esquinas de los trims no estén dañadas.",
en: "Verify that trim corners are not damaged."
},
{
id: 40,
es: "Verifique que no existan orificios no requeridos por dibujo.",
en: "Verify that there are no non-required holes on panels."
},
{
id: 41,
es: "Verifique que el decorado no esté rayado ni dañado.",
en: "Verify that decor is not scratched or damaged."
},
{
id: 42,
es: "Verifique que los retainers rojos no presenten daños.",
en: "Verify that red retainers do not present damage."
},
{
id: 43,
es: "Verifique que los retainers rojos giren libremente y sin gap.",
en: "Verify that red retainers move freely and without gaps."
},
{
id: 44,
es: "Verifique que los retainers estén posicionados correctamente.",
en: "Verify that red retainers are in the correct position."
},
{
id: 45,
es: "Verifique que la workdeck no esté rayada sobre el anodizado.",
en: "Verify that the workdeck is not scratched above the anodized layer."
},
{
id: 46,
es: "Verifique que las etiquetas de tierras eléctricas sean legibles y estén adheridas.",
en: "Verify that electrical ground labels are legible and properly attached."
},

{
id: 47,
es: "Verifique que las etiquetas de identificación de los arneses eléctricos sean legibles y no estén flojas.",
en: "Verify the labels of the electrical harnesses are legible and not loose."
},
{
id: 48,
es: "Verifique que los tornillos de integración se encuentren apretados.",
en: "Verify the integration screws are tightened."
},
{
id: 49,
es: "Verifique que las placas de integración no se encuentren rayadas.",
en: "Verify the integration placards are not scratched."
},
{
id: 50,
es: "Verifique que los arneses no se encuentren dañados en toda su extensión.",
en: "Verify the harnesses are not damaged throughout their entire length."
},
{
id: 51,
es: "Verifique que todos los spacers estén instalados para evitar contacto entre arneses.",
en: "Verify all spacers are installed to avoid contact between harnesses."
},
{
id: 52,
es: "Verifique que los arneses tengan mínimo dos vueltas de tape gris en los clamps.",
en: "Verify harnesses have at least two wraps of gray tape around clamp locations."
},
{
id: 53,
es: "Verifique que las líneas de plomería no se encuentren dañadas o deformadas.",
en: "Verify that plumbing lines are not damaged or deformed."
},
{
id: 54,
es: "Verifique que los clamps de plomería no se encuentren flojos.",
en: "Verify plumbing clamps are not loose."
},
{
id: 55,
es: "Verifique que las etiquetas de identificación de cajones no estén dañadas ni despegadas.",
en: "Verify storage identification labels are not damaged or debonded."
},
{
id: 56,
es: "Verifique que las etiquetas dentro de los compartimentos de basura no estén dañadas ni despegadas.",
en: "Verify labels inside waste compartments are not damaged or debonded."
},
{
id: 57,
es: "Verifique que los tie mounts tengan squeeze out alrededor.",
en: "Verify tie mounts have squeeze out around them."
},
{
id: 58,
es: "Verifique que no exista traqueteo o ruido anormal durante la operación de puertas.",
en: "Verify there is no rattling or abnormal noise during door operation."
},
{
id: 59,
es: "Verifique que las puertas no interfieran con la estructura al abrir.",
en: "Verify doors do not interfere with the structure while opening."
},
{
id: 60,
es: "Verifique que el latch de las puertas cierre completamente.",
en: "Verify the door latch closes completely."
},
{
id: 61,
es: "Verifique que no exista un gap mayor a 0.030 pulgadas entre puertas y trims.",
en: "Verify there is no gap greater than 0.030 inches between doors and trims."
},
{
id: 62,
es: "Verifique que las puertas de basura no tengan un gap mayor a 0.025 pulgadas.",
en: "Verify waste compartment doors do not have a gap greater than 0.025 inches."
},
{
id: 63,
es: "Verifique que el spacer gris esté instalado detrás de las jaladeras.",
en: "Verify the gray spacer is installed behind the handles."
},
{
id: 64,
es: "Verifique la funcionalidad del riel de la jaladera.",
en: "Verify the functionality of the handle rail."
},
{
id: 65,
es: "Verifique que los rieles de las jaladeras tengan toda la tornillería instalada.",
en: "Verify handle rails have all screws installed."
},
{
id: 66,
es: "Verifique que los spacers grises estén instalados y adheridos.",
en: "Verify gray spacers are installed and bonded."
},
{
id: 67,
es: "Verifique que las salidas móviles de aire puedan moverse libremente.",
en: "Verify movable air flow devices can move freely."
},
{
id: 68,
es: "Verifique que los waste flaps abran y cierren sin interferencia.",
en: "Verify waste flaps open and close without interference."
},
{
id: 69,
es: "Verifique que no exista un gap mayor de 0.025 pulgadas en los waste flaps.",
en: "Verify there is no gap greater than 0.025 inches on waste flaps."
},
{
id: 70,
es: "Verifique que los waste flaps tengan toda la tornillería instalada.",
en: "Verify waste flaps have all screws installed."
},
{
id: 71,
es: "Verifique que la pintura de los waste flaps no esté dañada.",
en: "Verify waste flap paint is not damaged."
},

{
id: 72,
es: "Verifique que los tornillos dentro de compartimentos de basura tengan RTV.",
en: "Verify screw heads inside waste compartments have RTV."
},
{
id: 73,
es: "Verifique que los doublers dentro de compartimentos de basura tengan RTV.",
en: "Verify doublers inside waste compartments are sealed with RTV."
},
{
id: 74,
es: "Verifique que los insertos frontales estén destapados.",
en: "Verify front inserts are open."
},
{
id: 75,
es: "Verifique que los insertos frontales no presenten FOD.",
en: "Verify front inserts are free of FOD."
},
{
id: 76,
es: "Verifique que toda la tornillería en compartimentos superiores esté instalada.",
en: "Verify all screws in upper compartments are installed."
},
{
id: 77,
es: "Verifique que la tornillería superior no esté floja.",
en: "Verify screws in upper compartments are not loose."
},
{
id: 78,
es: "Verifique que la tornillería de placas translúcidas superiores esté instalada.",
en: "Verify screws in upper translucent placards are installed."
},
{
id: 79,
es: "Verifique que la tornillería en compartimentos izquierdos esté instalada.",
en: "Verify screws in left side compartments are installed."
},
{
id: 80,
es: "Verifique que la tornillería de compartimentos izquierdos no esté floja.",
en: "Verify screws in left side compartments are not loose."
},
{
id: 81,
es: "Verifique que los insertos en compartimentos de cafeteras no presenten FOD.",
en: "Verify inserts in coffee maker compartments are free of FOD."
},
{
id: 82,
es: "Verifique que los insertos en compartimentos de cafeteras estén correctamente engomados.",
en: "Verify inserts in coffee maker compartments are properly potted."
},
{
id: 83,
es: "Verifique que toda la tornillería en compartimentos de cafeteras esté instalada.",
en: "Verify all screws in coffee maker compartments are installed."
},
{
id: 84,
es: "Verifique que la rosca sobresalga mínimo 0.031 pulgadas después de la tuerca.",
en: "Verify screw threads protrude at least 0.031 inches beyond nuts."
},
{
id: 85,
es: "Verifique que la tornillería en compartimentos de cafeteras no esté floja.",
en: "Verify screws in coffee maker compartments are not loose."
},
{
id: 86,
es: "Verifique que los tornillos de tierra en cafeteras tengan Nycote.",
en: "Verify ground screws in coffee maker compartments have Nycote."
},
{
id: 87,
es: "Verifique que los insertos en compartimentos de hornos no presenten FOD.",
en: "Verify inserts in oven compartments are free of FOD."
},
{
id: 88,
es: "Verifique que los insertos en compartimentos de hornos estén correctamente engomados.",
en: "Verify inserts in oven compartments are properly potted."
},
{
id: 89,
es: "Verifique que toda la tornillería en compartimentos de hornos esté instalada.",
en: "Verify all screws in oven compartments are installed."
},
{
id: 90,
es: "Verifique que la tornillería en hornos no esté floja.",
en: "Verify screws in oven compartments are not loose."
},
{
id: 91,
es: "Verifique que los tornillos de tierra en hornos tengan Nycote.",
en: "Verify ground screws in oven compartments have Nycote."
},
{
id: 92,
es: "Verifique que los insertos de compartimentos derechos no presenten FOD.",
en: "Verify inserts in right side compartments are free of FOD."
},
{
id: 93,
es: "Verifique que los insertos derechos estén correctamente engomados.",
en: "Verify inserts in right side compartments are properly potted."
},
{
id: 94,
es: "Verifique que toda la tornillería en compartimentos derechos esté instalada.",
en: "Verify all screws in right side compartments are installed."
},
{
id: 95,
es: "Verifique que la tornillería en compartimentos derechos no esté floja.",
en: "Verify screws in right side compartments are not loose."
},
{
id: 96,
es: "Verifique que los insertos de compartimentos de carritos no presenten FOD.",
en: "Verify inserts in cart compartments are free of FOD."
},

{
id: 97,
es: "Verifique que los insertos en compartimentos de carritos estén correctamente engomados.",
en: "Verify inserts in cart compartments are properly potted."
},
{
id: 98,
es: "Verifique que toda la tornillería en compartimentos de carritos esté instalada.",
en: "Verify all screws in cart compartments are installed."
},
{
id: 99,
es: "Verifique que la tornillería de compartimentos de carritos no esté floja.",
en: "Verify screws in cart compartments are not loose."
},
{
id: 100,
es: "Verifique que los tornillos de tierra en carritos tengan Nycote.",
en: "Verify ground screws in cart compartments have Nycote."
},
{
id: 101,
es: "Verifique que los floor fittings tengan torque de 25 lb/in.",
en: "Verify floor fittings have a torque of 25 lb/in."
},
{
id: 102,
es: "Verifique que los floor fittings estén orientados correctamente.",
en: "Verify floor fittings are correctly oriented."
},
{
id: 103,
es: "Verifique que los insertos con placas instaladas no estén desalineados.",
en: "Verify inserts with installed placards are not misaligned."
},
{
id: 104,
es: "Verifique que la magnolia no presente poros o faltante de material.",
en: "Verify edgefill does not present porosity or missing material."
},
{
id: 105,
es: "Verifique que no exista un step irregular entre paneles laterales y estructura.",
en: "Verify there is no uneven step between removable panels and structure."
},
{
id: 106,
es: "Verifique que no exista un step mayor a 0.020 pulgadas entre paneles removibles.",
en: "Verify there is no step greater than 0.020 inches between removable panels."
},
{
id: 107,
es: "Verifique que no exista un gap irregular mayor a 0.030 pulgadas.",
en: "Verify there is no uneven gap greater than 0.030 inches."
},
{
id: 108,
es: "Verifique que el gap de la caja eléctrica no supere 0.030 pulgadas.",
en: "Verify electrical panel gap does not exceed 0.030 inches."
},
{
id: 109,
es: "Verifique que los rubstrips estén alineados.",
en: "Verify rubstrips are aligned."
},
{
id: 110,
es: "Verifique que los bumpers transparentes estén instalados.",
en: "Verify transparent door bumpers are installed."
},
{
id: 111,
es: "Verifique que los bumpers grises estén instalados.",
en: "Verify gray bumpers are installed."
},
{
id: 112,
es: "Verifique que los filtros de malla y tornillos estén instalados.",
en: "Verify filter screens and screws are installed."
},
{
id: 113,
es: "Verifique que los tapones negros estén instalados.",
en: "Verify black plugs are installed."
},
{
id: 114,
es: "Verifique que el clamp de tierra cercano al drenaje esté correcto.",
en: "Verify the ground clamp near the drain valve is correct."
},
{
id: 115,
es: "Verifique que no exista FOD entre estructuras.",
en: "Verify there is no FOD between structures."
},
{
id: 116,
es: "Verifique que no exista FOD dentro de cajones y compartimentos.",
en: "Verify there is no FOD inside compartments."
},
{
id: 117,
es: "Verifique que no existan etiquetas o marcas de identificación en paneles.",
en: "Verify there are no identification tags or marks on panels."
},
{
id: 118,
es: "Verifique que las agarraderas tengan RTV del color correcto.",
en: "Verify handles have RTV matching component color."
},
{
id: 119,
es: "Verifique que el RTV alrededor de trims y placas sea uniforme.",
en: "Verify RTV around trims and placards is uniform."
}

];

export default questions;