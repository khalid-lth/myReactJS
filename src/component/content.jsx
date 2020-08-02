import React from 'react'; export default class Content extends React.Component {
    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="namaPelanggan"><b>Nama Pelanggan</b></label>
                    <input type="text" id="namaPelanggan" />
                    <br /><br />
                    <label htmlFor="daftarItem"><b>Daftar Item</b></label>
                    <input type="checkbox" id="semangka" name="semangka" value="semangka" />
                    <label htmlFor="semangka"> Semangka </label><br />
                    <input type="checkbox" id="jeruk" name="jeruk" value="jeruk" />
                    <label htmlFor="jeruk"> Jeruk </label><br />
                    <input type="checkbox" id="nanas" name="nanas" value="nanas" />
                    <label htmlFor="nanas"> Nanas </label><br />
                    <input type="checkbox" id="salak" name="salak" value="salak" />
                    <label htmlFor="salak"> Salak </label><br />
                    <input type="checkbox" id="anggur" name="anggur" value="anggur" />
                    <label htmlFor="anggur"> Anggur </label>
                    <br/><br/>
                    <button type="submit"> Kirim </button>
                </form>
            </div>
        )
    }
}