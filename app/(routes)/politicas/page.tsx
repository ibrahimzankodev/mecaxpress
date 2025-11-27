"use client";

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Politicas = () => {
    const router = useRouter()
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Políticas de Privacidad</h1>
            <p className="text-lg text-muted-foreground mb-8">
                En MecaToolsXpress, valoramos tu privacidad y seguridad. Esta política de privacidad explica cómo recopilamos, usamos, protegemos y gestionamos tus datos personales cuando interactúas con nuestro sitio web.
            </p>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Política de Privacidad – MecaToolsXpress</h2>
                    <p className="text-sm text-muted-foreground mb-2">Conforme al RGPD (UE) 2016/679 y a la LOPDGDD 3/2018</p>
                    <p className="text-sm text-muted-foreground mb-4">Última actualización: 28/11/2025</p>
                    <p className="mb-4">
                        En MecaToolsXpress, nos comprometemos a garantizar que tu información personal se encuentre protegida y no se utilice de forma indebida. Al facilitarnos tus datos, declaras haber leído y comprendido esta Política de Privacidad.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">1. Identidad del Responsable del Tratamiento</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Responsable: MecaToolsXpress</li>
                        <li>Correo electrónico de contacto: mecaxpressonline@gmail.com</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">2. Datos Personales que Recopilamos</h3>
                    <p className="mb-2">Podemos recopilar los siguientes datos:</p>

                    <h4 className="text-lg font-medium mt-4 mb-2">2.1 Datos proporcionados directamente por el usuario</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Nombre y apellidos</li>
                        <li>Dirección postal de envío y facturación</li>
                        <li>Teléfono de contacto</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Información de pago (gestionada por plataformas externas seguras)</li>
                    </ul>

                    <h4 className="text-lg font-medium mt-4 mb-2">2.2 Datos recopilados automáticamente</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Dirección IP</li>
                        <li>Datos de navegación y preferencias</li>
                        <li>Cookies y tecnologías similares</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">3. Finalidades del Tratamiento</h3>
                    <p className="mb-2">Tratamos tus datos con las siguientes finalidades:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Gestión de pedidos, pagos y envíos</li>
                        <li>Atención al cliente y soporte postventa</li>
                        <li>Cumplimiento de obligaciones legales (facturación, fiscalidad, garantías)</li>
                        <li>Envío de comunicaciones comerciales, únicamente si has dado tu consentimiento expreso</li>
                        <li>Mejora del sitio web y análisis de navegación mediante cookies</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">4. Legitimación para el Tratamiento</h3>
                    <p className="mb-2">Las bases legales según el RGPD son:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Ejecución de un contrato</li>
                        <li>Consentimiento del interesado</li>
                        <li>Cumplimiento de obligaciones legales</li>
                        <li>Interés legítimo (seguridad, prevención del fraude, mejora del servicio)</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">5. Destinatarios de los Datos</h3>
                    <p className="mb-2">No vendemos ni cedemos tus datos a terceros, salvo:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Empresas de transporte</li>
                        <li>Plataformas de pago</li>
                        <li>Servicios de hosting y mantenimiento web</li>
                        <li>Asesoría fiscal/contable</li>
                        <li>Administraciones públicas cuando sea legalmente necesario</li>
                    </ul>
                    <p className="mt-2 text-sm">Todos ellos cumplen el RGPD conforme a los contratos de tratamiento.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">6. Transferencias Internacionales</h3>
                    <p>Solo se realizan si son imprescindibles para el funcionamiento del servicio y siempre bajo garantías legales como las Cláusulas Contractuales Tipo.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">7. Plazo de Conservación</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Durante la relación comercial</li>
                        <li>Durante los plazos legales obligatorios</li>
                        <li>Hasta la retirada del consentimiento (en caso de comunicaciones comerciales)</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">8. Derechos del Usuario</h3>
                    <p className="mb-2">Puedes ejercer los derechos de:</p>
                    <p className="mb-2 ml-4">Acceso, rectificación, supresión, limitación, portabilidad, oposición y retirada del consentimiento.</p>
                    <p className="mb-2">Solicítalos en: <strong>mecaxpressonline@gmail.com</strong></p>
                    <p className="text-sm">También puedes reclamar ante la Agencia Española de Protección de Datos (AEPD).</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">9. Seguridad de la Información</h3>
                    <p>Aplicamos medidas técnicas y organizativas adecuadas (cifrado, servidores seguros, control de accesos), aunque ninguna tecnología es completamente infalible.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">10. Política de Cookies</h3>
                    <p className="mb-1">El sitio utiliza cookies técnicas, de personalización y analíticas.</p>
                    <p className="text-sm">Consulta la Política de Cookies para más información.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">11. Menores de Edad</h3>
                    <p>Los servicios no están dirigidos a menores de 16 años. Eliminaremos cualquier dato detectado sin autorización parental.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">12. Modificación de la Política</h3>
                    <p className="mb-1">Podemos actualizar esta política en cualquier momento.</p>
                    <p>La versión actualizada estará disponible en esta misma página.</p>
                </section>
            </div>

            <div className="mt-12 p-6 bg-secondary/50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <p className="mb-2">
                    Email: <strong>mecaxpressonline@gmail.com</strong>
                </p>
                <p className="mb-6">
                    Teléfono: <strong>+34 612 295 476</strong>
                </p>
                <Button onClick={() => router.push('/')}>Volver a la tienda</Button>
            </div>
        </div>
    );
}

export default Politicas;