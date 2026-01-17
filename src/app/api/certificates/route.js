
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

// CREATE certificate
export async function POST(req) {
  try {
    const formData = await req.formData();

    const title = formData.get("title");
    const issuer = formData.get("issuer");
    const issued_date = formData.get("issued_date");
    const image = formData.get("image");

    let imageUrl = null;

    if (image) {
      const ext = image.name.split(".").pop();
      const fileName = `${Date.now()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("certificate-images")
        .upload(fileName, image);

      if (uploadError) {
        return NextResponse.json(
          { error: uploadError.message },
          { status: 400 },
        );
      }

      const { data } = supabase.storage
        .from("certificate-images")
        .getPublicUrl(fileName);

      imageUrl = data.publicUrl;
    }

    const { error } = await supabase
      .from("certificates")
      .insert([{ title, issuer, issued_date, image: imageUrl }]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// UPDATE certificate
export async function PATCH(req) {
  try {
    const { id, title, issuer, issued_date } = await req.json();

    const { error } = await supabase
      .from("certificates")
      .update({ title, issuer, issued_date })
      .eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// DELETE certificate
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    const { error } = await supabase.from("certificates").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
