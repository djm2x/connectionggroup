<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use File;

class FilesController extends Controller
{

    public function uploadFiles(Request $request, string $folder) // : Collection

    {
        // $request->validate([
        //     'file' => 'required|mimes:pdf,xlx,csv|max:2048',
        // ]);

        //dd($request->all());
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = $file->getClientOriginalName();
            // $extension = $file->getClientOriginalExtension();

            // $picture = date('His') . '-' . $filename;

            // Storage::disk('public')->put($filename, 'Contents');
            // php artisan storage:link

            $file->move(public_path(str_replace('_','\\', $folder)), $filename);

            return response()->json(["message" => "Image Uploaded Succesfully"]);
        } else {
            return response()->json(["message" => "Select image first."]);
        }
    }



    public function deleteFiles(Request $request)
    {

        $filenames = $request->input('filenames');
        $folder = $request->input('folder');
        $folder = str_replace('_','\\', $folder);
        $filesDeleted = "";
        foreach ($filenames as $file){
            // Storage::disk('public')->delete("{$folder}/{$file}");
            File::delete("{$folder}/{$file}");

            $filesDeleted.= "{$folder}/{$file};";
        }

        return [
            'message' => count($filenames) == 0 ? "empty files {$filesDeleted}" : "delete successfuly {$filesDeleted}",
        ];
    }
}
