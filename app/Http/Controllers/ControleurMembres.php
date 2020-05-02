<?php

namespace App\Http\Controllers;

use App\Biographie;
use App\Membre;
use App\User;
// Obligatoire pour avoir accès au modèle
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
//Pour accéder à l'authentification
use Illuminate\Support\Facades\Auth;

class ControleurMembres extends Controller
{
    // des variables
    protected $les_membres;
    protected $users;
    protected $biographies;
    protected $soumissions;

    public function __construct(Membre $membres, User $users, Biographie $biographies, Request $requetes)
    {
        $this->les_membres = $membres;
        $this->users = $users;
        $this->biographies = $biographies;
        $this->soumissions = $requetes;
    }

    public function identite()
    {
        if (Auth::check()) 
        {
            $utilisateur = Auth::user();
        
            $id = Auth::id();
            
            return view('pages_site/identite', compact('utilisateur', 'id'));
        } 
        else 
        {
            echo "<h1>Accès non autorisé</h1>";
        }
    }
    
    public function acces_protege()
    {
        $infos_utilisateur = Auth::user();

        $utilisateur = $infos_utilisateur->name;

        echo "<h1>Utilisateur authentifié : " . $utilisateur . "</h1>";
    }

    public function index()
    {
        $les_membres = $this->les_membres->all();
        return view('pages_site/consultation_edition', compact('les_membres'));
    }

    public function nouvellesDemandes()
    {
        $users = $this->users->where('isActive', false)->get();
        return view('pages_site/nouvelles_demandes', compact('users'));
    }

    public function changeStatusAccount($id)
    {
        $user = Auth::user()->find($id);
        $user->isActive = !$user->isActive;
        $user->save();

        return redirect('nouvellesDemandes');
    }

    public function afficher($numero)
    {
        try {

            $un_membre = membre::findOrFail($numero);

            //
            $biographie = $this->biographies->where('idMembre', $un_membre->id)->first();

            $un_membre->description = $biographie != null ? $biographie->description : "pas de description";

            return view('pages_site/membre', compact('un_membre'));

        } catch (ModelNotFoundException $ex) {

            return view('pages_site/not-found', ['message' => "Membre recherché avec id {$numero} n'existe plus"]);
        }
    }

    public function creer()
    {
        $membre = new membre();
        
        $user = Auth::user();

        $membre->adresse = $user->email;
        $membre->prenom = $user->name;
        $membre->idUser = $user->id;

        return view('pages_site/creation', compact('membre'));
    }

    public function enregistrer(Request $request)
    {
        $membre = new membre();
        $membre->nom = $request->nom;
        $membre->adresse = $request->adresse;
        $membre->prenom = $request->prenom;
        $membre->idUser = $request->idUser;

        $membre->save();

        //
        $biographie = new Biographie();
        $biographie->description = $request->description;
        $biographie->idMembre = $membre->id;

        $biographie->save();

        $message = "Membre créé";

        return view('pages_site/confirmation', compact('message'));
    }

    public function editer($numero)
    {
        $un_membre = $this->les_membres->find($numero);

        if ($un_membre != null) {

            $biographie = $this->biographies->where('idMembre', $un_membre->id)->first();

            // dd($biographie->get());

            $un_membre->description = $biographie != null ? $biographie->description : "";

            return view('pages_site/edition', compact('un_membre'));
        }

        return view('pages_site/not-found', ['message' => "Membre recherché avec id {$numero} n'existe plus"]);
    }
    public function miseAJour($numero)
    {
        $un_membre = $this->les_membres->find($numero);

        if ($un_membre != null) {
            $la_soumission = $this->soumissions;
            $un_membre->nom = $la_soumission->nom;
            $un_membre->prenom = $la_soumission->prenom;
            $un_membre->adresse = $la_soumission->adresse;
            $un_membre->save();

            //
            $biographie = $this->biographies->where('idMembre', $un_membre->id)->first();

            // if a user have description
            if ($biographie != null) {
                $biographie->description = $la_soumission->description;
                $biographie->save();
            }
            // if a user have no description, create a new one for it
            else {
                $biographie = new Biographie();
                $biographie->description = $la_soumission->description;
                $biographie->idMembre = $la_soumission->id;

                $biographie->save();
            }

            return view('pages_site/confirmation', ['message' => "Membre modifié"]);
        }

        return view('pages_site/not-found', ['message' => "Membre recherché avec id {$numero} n'existe plus"]);
    }

    function list() {
        $les_membres = Membre::all();
        return view('pages_site/membrescss', compact('les_membres'));
    }
}
