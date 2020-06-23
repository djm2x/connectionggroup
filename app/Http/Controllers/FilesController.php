<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\URL;

class FilesController extends Controller
{

    public function uploadFiles2(Request $request, string $folder) // : Collection

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

            $file->move(public_path(str_replace('_', '\\', $folder)), $filename);

            return response()->json(["message" => "Image Uploaded Succesfully"]);
        } else {
            return response()->json(["message" => "Select image first."]);
        }
    }

    public function angEditorUploadImage(Request $request, string $folder) // : Collection
    {
        $file = $request->file('file');
        // $uploaddir = 'img/';
        $filename = $file->getClientOriginalName();
        // $destination_path = $uploaddir;

        if ($file->move(public_path($folder), $filename)) {
            return json_encode($this->addImage($folder, $filename));
        } else {
            return json_encode(['response' => 'error']);
        }
    }

    public function addImage($folder, $filename)
    {
        $path = request()->getSchemeAndHttpHost() . '/' . $folder . '/' . $filename;

        // if (Image::create(['name'=>$filename, 'path'=>$path])) {

        //     return [
        //         'status' => true,
        //         'originalName' => $filename,
        //         'generatedName' => $filename,
        //         'msg'=>"Image upload successful",
        //         'imageUrl' => $path
        //     ];
        // }
        // return ['response'=>'error'];

        return [
            // 'status' => true,
            // 'originalName' => $filename,
            // 'generatedName' => $filename,
            // 'msg'=>"Image upload successful",
            'imageUrl' => $path
        ];
    }



    public function deleteFiles(Request $request)
    {

        $filenames = $request->input('filenames');
        $folder = $request->input('folder');

        // $folder = str_replace('_', '/', $folder);
        $filesDeleted = [];
        foreach ($filenames as $filename) {
            // Storage::disk('public')->delete("{$folder}/{$file}");
            File::delete(public_path(str_replace('_', '/', $folder))."/{$filename}");

            array_push($filesDeleted, "{$folder}/{$filename}");
        }

        return [
            'message' => count($filenames) == 0 ? "empty files" : "delete successfuly",
            'fileDeleted' => $filesDeleted,
        ];
    }

    public function uploadFiles(Request $request, string $folder) // : Collection
    {
        $request->validate([
            // 'file' => 'required|mimes:pdf,xlx,csv|max:2048',
            // 'file' => 'required',
        ]);

        $allowedfileExtension = ['pdf', 'jpg', 'png', 'docx'];

        $length =  $request->get('length');
        
        if ($length != 0/*$request->hasFile('file0')*/) {

            $filesAdded = [];
            for ($i=0; $i < $length; $i++) {

                $file = $request->file("file{$i}");

                $filename = $file->getClientOriginalName();
                // $extension = $file->getClientOriginalExtension();

                $file->move(public_path(str_replace('_', '/', $folder)), $filename);

                array_push($filesAdded, str_replace('_', '/', $folder)."/{$filename}");
            }
            
            return [
                "message" => "Images Uploaded Succesfully", 
                "filesUploaded" => $filesAdded,
                // "files" => $files,
                // "i" => $i,
            ];
        } else {
            return ["message" => "Select image first.", 'filesUploaded' => $length];
        }
    }
}
