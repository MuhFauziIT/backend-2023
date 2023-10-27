<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
	{
        # menggunakan model Student untuk select data
		$students = Student::all();

		if (!empty($students)) {
			$response = [
				'message' => 'Menampilkan Data Semua Student',
				'data' => $students,
			];
			return response()->json($response, 200);
		} else {
			$response = [
				'message' => 'Data tidak ada'
			];
			return response()->json($response, 200);
		}
	}

	public function store(Request $request) 
	{

		// $input = [
		// 	'nama' => $request->nama,
		// 	'nim' => $request->nim,
		// 	'email' => $request->email,
		// 	'jurusan' => $request->jurusan
		// ];

		$student = Student::create($request->all());

		$response = [
			'message' => 'Data Student Berhasil Dibuat',
			'data' => $student,
		];

		return response()->json($response, 201);
	}
}