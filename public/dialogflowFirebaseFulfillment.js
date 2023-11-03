/**
 * Este archivo contiene la conexión de Dialogflow con la base de datos en Firebase
 * Contiene la estructura del árbol de decisiones del ChatBot
 * 
 * Se carga directamente en el editor de DialogFlow
 */

'use strict';

const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const admin = require('firebase-admin');

admin.initializeApp();

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  const db = admin.firestore();

  /**
   * Responde el saludo del usuario
   */
  function welcome(agent) {
    return db.collection('info').where('nombre', '==', 'AGM').get()
      .then(snapshot => {
        if (snapshot.empty) {
          agent.add('No hay información disponible sobre AGM.');
          return;
        }

        const infoData = snapshot.docs[0].data();
        agent.add(infoData.saludo);

      })
      .catch(error => {
        console.error('Error al acceder a Firestore:', error);
        agent.add('Ocurrió un error al obtener la información.');
      });
  }

  /**
   * Responde con la direccion del consultorio
   */
  function mostrarDireccionConsultorio(agent) {
    return db.collection('info').where('nombre', '==', 'AGM').get()
      .then(snapshot => {
        if (snapshot.empty) {
          agent.add('No hay información disponible sobre AGM.');
          return;
        }

        const infoData = snapshot.docs[0].data();
        agent.add(infoData.direccion);

      })
      .catch(error => {
        console.error('Error al acceder a Firestore:', error);
        agent.add('Ocurrió un error al obtener la información.');
      });
  }

  /**
   * Responde con el correo del consultorio
   */
  function mostrarCorreoConsultorio(agent) {
    return db.collection('info').where('nombre', '==', 'AGM').get()
      .then(snapshot => {
        if (snapshot.empty) {
          agent.add('No hay información disponible sobre AGM.');
          return;
        }

        const infoData = snapshot.docs[0].data();
        agent.add(infoData.correo);

      })
      .catch(error => {
        console.error('Error al acceder a Firestore:', error);
        agent.add('Ocurrió un error al obtener la información.');
      });
  }

  /**
   * Responde con el horario del consultorio
   */
  function mostrarHorarioConsultorio(agent) {
    return db.collection('info').where('nombre', '==', 'AGM').get()
      .then(snapshot => {
        if (snapshot.empty) {
          agent.add('No hay información disponible sobre AGM.');
          return;
        }

        const infoData = snapshot.docs[0].data();
        agent.add(infoData.horario);

      })
      .catch(error => {
        console.error('Error al acceder a Firestore:', error);
        agent.add('Ocurrió un error al obtener la información.');
      });
  }

  /**
   * Responde con el telefono del consultorio
   */
  function mostrarTelefonoConsultorio(agent) {
    return db.collection('info').where('nombre', '==', 'AGM').get()
      .then(snapshot => {
        if (snapshot.empty) {
          agent.add('No hay información disponible sobre AGM.');
          return;
        }

        const infoData = snapshot.docs[0].data();
        agent.add(infoData.telefono);

      })
      .catch(error => {
        console.error('Error al acceder a Firestore:', error);
        agent.add('Ocurrió un error al obtener la información.');
      });
  }

  /**
   * Responde con toda la informacion
   */
  function mostrarInfoConsultorio(agent) {
    return db.collection('info').where('nombre', '==', 'AGM').get()
      .then(snapshot => {
        if (snapshot.empty) {
          agent.add('No hay información disponible sobre AGM.');
          return;
        }

        const infoData = snapshot.docs[0].data();
        agent.add(infoData.telefono);
        agent.add(infoData.correo);
        agent.add(infoData.horario);
        agent.add(infoData.direccion);

      })
      .catch(error => {
        console.error('Error al acceder a Firestore:', error);
        agent.add('Ocurrió un error al obtener la información.');
      });
  }



  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('mostrarDireccionConsultorio', mostrarDireccionConsultorio);
  intentMap.set('mostrarCorreoConsultorio', mostrarCorreoConsultorio);
  intentMap.set('mostrarHorarioConsultorio', mostrarHorarioConsultorio);
  intentMap.set('mostrarTelefonoConsultorio', mostrarTelefonoConsultorio);
  intentMap.set('mostrarInfoConsultorio', mostrarInfoConsultorio);

  agent.handleRequest(intentMap);
});



