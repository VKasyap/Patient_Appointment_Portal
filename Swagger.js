/**
 * @swagger
 * /:
 *   get:
 *     description: Returns server running
 */
// Hospitals Collection
/**
 * @swagger
 * /hospitals:
 *   get:
 *     description: Returns all list of hospitals
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of hospitals
 *         schema:
 */
/**
 * @swagger
 * /addHospital:
 *    post:
 *      description: create a new hospital
 *    parameters:
 *      - name: hospitalId
 *        description: hospital Id
 *        required: true
 *        schema:
 *          type: string
 *      - name: name
 *      - name: location
 *      - name: contact
 *      - name: bestDoctor
 *      - name : rating
 */
/**
 * @swagger
 * /signUp:
 *    post:
 *      description: add user
 *    parameters:
 *      - name: userName
 *      - name: email
 *      - name: password
 */