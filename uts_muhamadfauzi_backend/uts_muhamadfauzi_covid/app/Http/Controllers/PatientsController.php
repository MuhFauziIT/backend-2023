<?php

namespace App\Http\Controllers;

use App\Models\Patients;
use Illuminate\Http\Request;

class PatientsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $patients = Patients::all();

		if (!empty($patients)) {
			$response = [
				'message' => 'Menampilkan Data Semua Patient Covid',
				'data' => $patients,
			];
			return response()->json($response, 200);
		} else {
			$response = [
				'message' => 'Data tidak ada / belum dibuat'
			];
			return response()->json($response, 404);
		}
	}

    /**
     * Show the form for creating a new resource.
     */
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $patients = Patients::create($request->all());

		$response = [
			'message' => 'Data Pasien Covid Berhasil Dibuat',
			'data' => $patients,
		];

		return response()->json($response, 201);
        // $validateData = $request->validate([
        //     'name' => 'required',
        //     'phone' => 'required | numeric',
        //     'address' => 'required',
        //     'status' => 'required',
        // ]);

        // $patients = Patients::create($validateData);

        // $data = [
        //     'messages' => 'Berhasil menambahkan data pasien covid',
        //     'data' => $patients
        // ];
        
        // return response()->json($data,201);

	}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $patients = Patients::find($id);

		if ($patients) {
			$response = [
				'message' => 'Get detail patient / Menampilkan Data Pasien',
				'data' => $patients
			];
	
			return response()->json($response, 200);
		} else {
			$response = [
				'message' => 'Data not found / Data Tidak Ditemukan'
			];
			
			return response()->json($response, 404);
		}
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $patients = Patients::find($id);

		if ($patients) {
			$response = [
				'message' => 'Patients is updated / Data Pasien sudah diperbaharui',
				'data' => $patients->update($request->all())
			];
	
			return response()->json($response, 200);
		} else {
			$response = [
				'message' => 'Data not found / Data tidak ditemukan'
			];

			return response()->json($response, 404);
		}
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $patients = Patients::find($id);

		if ($patients) {
			$response = [
				'message' => 'Patients is delete / Data Pasien Sudah Di Hapus',
				'data' => $patients->delete()
			];

			return response()->json($response, 200); 
		} else {
			$response = [
				'message' => 'Data not found / Data Tidak Ditemukan'
			];

			return response()->json($response, 404);
		}
    }
}
