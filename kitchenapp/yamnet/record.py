import argparse
import wave
import microphones
import pyaudio

# Variables
FS = 44100  # Record at 44100 samples per second
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 16000
CHUNK = 1024
MICROPHONES_DESCRIPTION = []
FPS = 60.0
SECONDS = 3 # Record 3 Seconds
MICROPHONE_INDEX = 0


class Recorder:

    def __init__(self, file_name) -> None:
        self.file_name = file_name

        self.FS = 44100  # Record at 44100 samples per second
        self.FORMAT = pyaudio.paInt16
        self.CHANNELS = 1
        self.RATE = 16000
        self.CHUNK = 1024
        self.MICROPHONES_DESCRIPTION = []
        self.FPS = 60.0
        self.SECONDS = 3
        self.MICROPHONE_INDEX = 0

        self.p = pyaudio.PyAudio()
        self.stream = self.p.open(format=self.FORMAT,
                                  channels=self.CHANNELS,
                                  rate=self.FS,
                                  frames_per_buffer=self.CHUNK,
                                  input=True,
                                  input_device_index=self.MICROPHONE_INDEX)

    def available_microphones(self):
        return microphones.list_microphones()

    def set_mic_index(self, idx):
        self.MICROPHONE_INDEX = idx

    def record(self):

        print('Recording...')

        frames = []  # Initialize array to store frames

        # Store data in chunks for 3 seconds
        for i in range(0, int(FS / self.CHUNK * self.SECONDS)):
            data = self.stream.read(self.CHUNK)
            frames.append(data)

        print('---Finished recording---')

        # Save the recorded data as a WAV file
        wf = wave.open(f'./yamnet/{self.file_name}', 'wb')
        wf.setnchannels(self.CHANNELS)
        wf.setsampwidth(self.p.get_sample_size(self.FORMAT))
        wf.setframerate(FS)
        wf.writeframes(b''.join(frames))
        wf.close()

        print('---Saved file---')
