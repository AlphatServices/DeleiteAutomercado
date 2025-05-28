"use client";

import { useState } from 'react';
import styles from './Access.module.css';

type Device = {
    id: string;
    name: string;
    date: string;
};

export default function SecurityAccess() {
    // Datos de ejemplo para dispositivos
    const [devices, setDevices] = useState<Device[]>([
        { id: '1', name: 'Sesión', date: '27 de mayo, 2025 a las 14:55' },
        { id: '2', name: 'macOS Big Sur. Chrome', date: '27 de mayo, 2025 a las 13:36' },
        { id: '3', name: 'Sesión', date: '27 de mayo, 2025 a las 08:36' },
    ]);

    // Función para actualizar contraseña
    const handleUpdatePassword = () => {
        console.log('Actualizar contraseña');
        // Aquí iría la lógica para mostrar un modal o navegar a la página de actualización de contraseña
    };

    // Función para conectar redes sociales
    const handleConnectSocial = (network: string) => {
        console.log(`Conectar con ${network}`);
        // Aquí iría la lógica para conectar con la red social
    };

    // Función para cerrar sesión en un dispositivo
    const handleLogoutDevice = (deviceId: string) => {
        console.log(`Cerrar sesión en dispositivo ${deviceId}`);
        // Aquí iría la lógica para cerrar sesión en el dispositivo
        // Y luego actualizar el estado
        setDevices(devices.filter(device => device.id !== deviceId));
    };

    return (
        <div className={styles["personal-content"]} id="security-content">
            <div className={styles["header-container"]}>
                <h2>Acceso y seguridad</h2>
            </div>

            <div className={styles["profile-section"]}>
                <h2>Inicio de sesión</h2>
                <div className={styles["login-container"]}>
                    <div className={styles["login-row"]}>
                        <div className={styles["login-info"]}>
                            <h3>Contraseña</h3>
                            <p className={styles["last-updated"]}>Última actualización hace 1 mes</p>
                        </div>
                        <button className={styles["update-password-btn"]}>Actualizar contraseña</button>
                    </div>
                </div>
            </div>

            <div className={styles["profile-section"]}>
                <h2>Redes sociales</h2>
                <div className={styles["social-layout"]}>
                    <div className={styles["social-account"]}>
                        <div className={styles["social-info"]}>
                            <h3>Facebook</h3>
                            <p className={styles["status-not-connected"]}>No conectado</p>
                        </div>
                        <button className={styles["connect-btn"]}>Conectar</button>
                    </div>

                    <div className={styles["social-account"]}>
                        <div className={styles["social-info"]}>
                            <h3>Cuenta de Apple</h3>
                            <p className={styles["status-not-connected"]}>No conectado</p>
                        </div>
                        <button className={styles["connect-btn"]}>Conectar</button>
                    </div>
                </div>
            </div>

            <div className={styles["profile-section"]}>
                <h2>Historial de dispositivos</h2>
                <div className={styles["device-container"]}>
                    <div className={styles["device-row"]}>
                        <div className={styles["device-info"]}>
                            <h3>Sesión</h3>
                            <p>27 de mayo, 2025 a las 14:55</p>
                        </div>
                        <button className={styles["logout-device-btn"]}>Cerrar sesión en dispositivo</button>
                    </div>

                    <div className={styles["device-row"]}>
                        <div className={styles["device-info"]}>
                            <h3>macOS Big Sur. Chrome</h3>
                            <p>27 de mayo, 2025 a las 13:36</p>
                        </div>
                        <button className={styles["logout-device-btn"]}>Cerrar sesión en dispositivo</button>
                    </div>

                    <div className={styles["device-row"]}>
                        <div className={styles["device-info"]}>
                            <h3>Sesión</h3>
                            <p>27 de mayo, 2025 a las 08:36</p>
                        </div>
                        <button className={styles["logout-device-btn"]}>Cerrar sesión en dispositivo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
