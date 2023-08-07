const { default: mongoose } = require("mongoose");

const pelayananModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Judul harus diisi"],
    },
    content: {
      type: String,
      required: [true, "Konten harus diisi"],
    },
    image: {
      type: String,
      required: [true, "Gambar harus diisi"],
    },
    publicId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Pelayanan =
  mongoose.models.pelayanans || mongoose.model("pelayanans", pelayananModel);

export default Pelayanan;
