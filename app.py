from flask import Flask,redirect,request,url_for,render_template,jsonify
import sqlite3

app= Flask(__name__)


@app.route("/productos")
def productos():
    return render_template('productos.html')


@app.route('/obtener_productos', methods=['POST'])
def obtener_productos():
    data = request.get_json()
    tipo = data.get('tipo')  # "gorra", por ejemplo

    conn = sqlite3.connect('perezoso.db')
    cursor = conn.cursor()
    cursor.execute("SELECT id, modelo, precio FROM productos WHERE tipo = ?", (tipo,))
    productos = cursor.fetchall()
    conn.close()

    # Convertimos a JSON
    resultado = [
        {'id': prod[0], 'nombre': prod[1], 'precio': prod[2]} for prod in productos
    ]
    return jsonify(resultado)


if __name__ == '__main__':
    app.run(debug=True)
